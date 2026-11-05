/* ============================================================
   FLOWERCIE — script.js
   Kamu tidak perlu mengedit file ini. Edit config.js saja ♡
   ============================================================ */
(function () {
  "use strict";

  var cfg = window.FLOWERCIE || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- storage aman (tidak error kalau diblokir) ---------- */
  function store(key, val) {
    try {
      if (val === undefined) { return window.localStorage.getItem(key); }
      window.localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  /* ---------- toast ---------- */
  var toastEl = $("#toast"), toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 3200);
  }

  /* ---------- terapkan config ke halaman ---------- */
  document.title = (document.body.getAttribute("data-title") || "") + (cfg.storeName ? " | " + cfg.storeName : "");
  if (!document.body.getAttribute("data-title") && cfg.storeName) {
    document.title = cfg.storeName + " ♡ " + (cfg.storeDomain || "");
  }

  $$("[data-text]").forEach(function (el) {
    var v = cfg[el.getAttribute("data-text")];
    if (v === undefined) return;
    if (v === "") { el.hidden = true; return; }
    el.textContent = v;
  });

  $$("img[data-img]").forEach(function (img) {
    var src = cfg[img.getAttribute("data-img")];
    if (src) img.src = src;
    if (!img.alt && cfg.storeName && img.getAttribute("data-img") === "logo") img.alt = cfg.storeName + " logo";
    img.addEventListener("error", function () { img.style.visibility = "hidden"; });
  });

  function isPlaceholder(url) { return !url || /GANTI/i.test(url); }

  $$("a[data-link]").forEach(function (a) {
    var url = cfg[a.getAttribute("data-link")];
    if (isPlaceholder(url)) {
      a.setAttribute("href", "#");
      a.setAttribute("data-placeholder", "1");
    } else {
      a.setAttribute("href", url);
    }
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-placeholder]");
    if (a) {
      e.preventDefault();
      toast("Link ini belum diisi. Ganti di config.js ♡");
    }
  });

  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- hamburger menu ---------- */
  var topbar = $("#topbar"), menuBtn = $("#menuBtn"), menu = $("#menu");
  function setMenu(open) {
    if (!menu || !menuBtn) return;
    menu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    var use = $("use", menuBtn);
    if (use) use.setAttribute("href", open ? "#i-close" : "#i-menu");
    if (topbar) topbar.classList.toggle("menu-open", open);
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () { setMenu(menu.hidden); });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    document.addEventListener("click", function (e) {
      if (!menu.hidden && !topbar.contains(e.target)) setMenu(false);
    });
  }

  /* ---------- musik latar ---------- */
  var musicBtn = $("#musicBtn");
  if (musicBtn) {
    var M = cfg.music || {};
    var KEY = "flowercie_music_v1";
    var player = $("#player"), playPause = $("#playPause"), seek = $("#seek");
    var curT = $("#curTime"), durT = $("#durTime"), stateEl = $("#musicState");
    var unloading = false, lastSave = 0, userAction = false, dragging = false;

    var audio = new Audio();
    audio.loop = true;
    audio.preload = "none";
    audio.volume = typeof M.volume === "number" ? Math.max(0, Math.min(1, M.volume)) : 0.6;
    audio.src = M.file || "assets/music/background.mp3";

    if ($("#trackTitle")) $("#trackTitle").textContent = M.title || "Background music";
    if ($("#trackArtist")) $("#trackArtist").textContent = M.artist || (cfg.storeName || "");

    var fmt = function (s) {
      if (!isFinite(s) || s < 0) return "0:00";
      var m = Math.floor(s / 60), r = Math.floor(s % 60);
      return m + ":" + (r < 10 ? "0" : "") + r;
    };

    function render() {
      var playing = !audio.paused;
      musicBtn.classList.toggle("is-on", playing);
      musicBtn.setAttribute("aria-pressed", playing ? "true" : "false");
      musicBtn.setAttribute("aria-label", playing ? "Turn music off" : "Turn music on");
      if (stateEl) stateEl.textContent = playing ? "ON" : "OFF";
      if (playPause) {
        var u = $("use", playPause);
        if (u) u.setAttribute("href", playing ? "#i-pause" : "#i-play");
        playPause.setAttribute("aria-label", playing ? "Pause" : "Play");
      }
    }
    function save() {
      if (unloading) return;
      store(KEY, JSON.stringify({ open: !player.hidden, playing: !audio.paused, time: audio.currentTime || 0 }));
    }
    function showPlayer(v) { player.hidden = !v; save(); }

    function start() {
      var p;
      try { p = audio.play(); } catch (e) { p = null; }
      if (p && p.catch) {
        p.catch(function (err) {
          if (err && err.name === "NotAllowedError") { render(); return; }
          if (err && err.name === "AbortError") { return; }
          // file tidak ditemukan / format tidak didukung -> ditangani event "error"
        });
      }
    }
    function turnOff() {
      audio.pause();
      try { audio.currentTime = 0; } catch (e) { /* abaikan */ }
      showPlayer(false);
      render();
      save();
    }

    musicBtn.addEventListener("click", function () {
      userAction = true;
      if (!audio.paused) { turnOff(); }
      else { showPlayer(true); start(); }
    });
    if (playPause) playPause.addEventListener("click", function () {
      userAction = true;
      if (audio.paused) start(); else audio.pause();
    });
    var closeBtn = $("#playerClose");
    if (closeBtn) closeBtn.addEventListener("click", turnOff);

    if (seek) {
      seek.addEventListener("input", function () {
        dragging = true;
        if (isFinite(audio.duration)) {
          audio.currentTime = (seek.value / 100) * audio.duration;
          if (curT) curT.textContent = fmt(audio.currentTime);
        }
      });
      seek.addEventListener("change", function () { dragging = false; });
    }

    audio.addEventListener("play", render);
    audio.addEventListener("pause", function () { render(); save(); });
    audio.addEventListener("loadedmetadata", function () { if (durT) durT.textContent = fmt(audio.duration); });
    audio.addEventListener("timeupdate", function () {
      if (!dragging && seek && isFinite(audio.duration) && audio.duration > 0) {
        seek.value = (audio.currentTime / audio.duration) * 100;
      }
      if (curT) curT.textContent = fmt(audio.currentTime);
      var now = Date.now();
      if (now - lastSave > 1000) { lastSave = now; save(); }
    });
    audio.addEventListener("error", function () {
      // File musik belum ada atau tidak bisa diputar: website tetap normal.
      if (userAction) toast("File musik belum ada. Taruh MP3 di assets/music/ ♡");
      try { audio.pause(); } catch (e) { /* abaikan */ }
      player.hidden = true;
      render();
      store(KEY, JSON.stringify({ open: false, playing: false, time: 0 }));
    });
    window.addEventListener("pagehide", function () { save(); unloading = true; });

    /* lanjutkan status musik dari halaman sebelumnya (tanpa autoplay awal) */
    var saved = null;
    try { saved = JSON.parse(store(KEY) || "null"); } catch (e) { saved = null; }
    if (saved && saved.open) {
      player.hidden = false;
      audio.preload = "auto";
      audio.addEventListener("loadedmetadata", function () {
        try { if (saved.time) audio.currentTime = saved.time; } catch (e) { /* abaikan */ }
      }, { once: true });
      if (saved.playing) start();
    }
    render();
  }

  /* ---------- halaman Terms & Conditions ---------- */
  var tncBody = $("#tncBody");
  if (tncBody) {
    var sections = (cfg.tnc && cfg.tnc.sections) || [];
    sections.forEach(function (s) {
      if (s.title) {
        var h = document.createElement("h2");
        h.textContent = s.title;
        tncBody.appendChild(h);
      }
      String(s.text || "").split(/\n\s*\n/).forEach(function (para) {
        para = para.replace(/^\s+|\s+$/g, "");
        if (!para) return;
        var p = document.createElement("p");
        p.textContent = para;
        tncBody.appendChild(p);
      });
    });

    var SK = "flowercie_tnc_scale";
    var scale = parseFloat(store(SK)) || 1;
    var out = $("#sizeOut");
    var applyScale = function () {
      scale = Math.max(0.85, Math.min(1.8, Math.round(scale * 100) / 100));
      tncBody.style.setProperty("--tnc-scale", scale);
      if (out) out.textContent = Math.round(scale * 100) + "%";
      store(SK, String(scale));
    };
    $("#sizeUp").addEventListener("click", function () { scale += 0.1; applyScale(); });
    $("#sizeDown").addEventListener("click", function () { scale -= 0.1; applyScale(); });
    $("#sizeReset").addEventListener("click", function () { scale = 1; applyScale(); });
    applyScale();
  }
})();
