/* funfx.js — sounds, points, streaks & celebration for the FAST Test Prep app.
 * Pure Web Audio API (no sound files) + a tiny DOM confetti. Works offline.
 * Points are cumulative across sessions; current streak resets on a wrong answer. */
(function (global) {
  'use strict';

  // ---- Sound (Web Audio) ----
  var actx = null;
  function ctx() {
    if (!actx) {
      try { actx = new (global.AudioContext || global.webkitAudioContext)(); } catch (e) { actx = null; }
    }
    if (actx && actx.state === 'suspended') { try { actx.resume(); } catch (e) {} }
    return actx;
  }
  function soundOn() { return localStorage.getItem('fast-sound') !== 'off'; }
  function note(freq, startOffset, dur, type, peak) {
    var a = ctx(); if (!a) return;
    var t0 = a.currentTime + startOffset;
    var osc = a.createOscillator();
    var g = a.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak || 0.18, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g); g.connect(a.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  }
  function playCorrect() { if (!soundOn()) return; note(660, 0, 0.13, 'sine'); note(880, 0.1, 0.18, 'sine'); }
  function playWrong()   { if (!soundOn()) return; note(200, 0, 0.22, 'square', 0.12); note(150, 0.12, 0.22, 'square', 0.12); }
  function playComplete(){ if (!soundOn()) return; [523,659,784,1047].forEach(function(f,i){ note(f, i*0.13, 0.2, 'triangle', 0.16); }); }

  // ---- Points & streak ----
  function getPoints() { return parseInt(localStorage.getItem('fast-points') || '0', 10) || 0; }
  function setPoints(p) { localStorage.setItem('fast-points', String(p)); }
  function getBestStreak() { return parseInt(localStorage.getItem('fast-best-streak') || '0', 10) || 0; }
  var streak = 0;

  var PRAISE = ['Correct! 🎉', 'Nailed it! 🌟', 'Yes! 🔥', 'Great job! 💪', 'Boom! 💥', 'Perfect! ✨', 'You got it! 🙌', 'Smart! 🧠'];
  function praise() {
    var base = PRAISE[Math.floor((getPoints() + streak) % PRAISE.length)];
    if (streak === 3) return base + '  🔥 3 in a row!';
    if (streak === 5) return base + '  🔥🔥 5 streak — on fire!';
    if (streak >= 7) return base + '  🚀 ' + streak + ' streak — unstoppable!';
    return base;
  }

  function ensureHUD() {
    var hud = document.getElementById('funfx-hud');
    if (hud) return hud;
    hud = document.createElement('div');
    hud.id = 'funfx-hud';
    hud.style.cssText = 'position:fixed;top:10px;right:10px;z-index:9000;display:flex;gap:8px;font-weight:700;' +
      'font-family:-apple-system,Segoe UI,Roboto,sans-serif;';
    hud.innerHTML =
      '<span id="funfx-points" style="background:#fff8e1;color:#f57f17;border:2px solid #ffd54f;border-radius:50px;padding:4px 12px;box-shadow:0 2px 6px rgba(0,0,0,.12);">⭐ 0</span>' +
      '<span id="funfx-streak" style="background:#ffebee;color:#e53935;border:2px solid #ef9a9a;border-radius:50px;padding:4px 12px;box-shadow:0 2px 6px rgba(0,0,0,.12);">🔥 0</span>';
    document.body.appendChild(hud);
    return hud;
  }
  function updateHUD() {
    ensureHUD();
    var p = document.getElementById('funfx-points');
    var s = document.getElementById('funfx-streak');
    if (p) p.textContent = '⭐ ' + getPoints();
    if (s) s.textContent = '🔥 ' + streak;
  }
  function pop(el) {
    if (!el) return;
    el.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.35)' }, { transform: 'scale(1)' }],
      { duration: 320, easing: 'ease-out' }
    );
  }

  function onCorrect() {
    streak += 1;
    var gain = 10 + (streak >= 3 ? 5 : 0) + (streak >= 5 ? 5 : 0);
    setPoints(getPoints() + gain);
    if (streak > getBestStreak()) localStorage.setItem('fast-best-streak', String(streak));
    playCorrect();
    updateHUD();
    pop(document.getElementById('funfx-points'));
    pop(document.getElementById('funfx-streak'));
    return praise();
  }
  function onWrong() {
    streak = 0;
    playWrong();
    updateHUD();
  }

  // ---- Confetti + celebration ----
  function confetti() {
    var colors = ['#4CAF50', '#2196F3', '#FFC107', '#F44336', '#9C27B0', '#FF9800'];
    for (var i = 0; i < 80; i++) {
      (function (i) {
        var d = document.createElement('div');
        var size = 6 + Math.floor(Math.random() * 8);
        d.style.cssText = 'position:fixed;top:-20px;left:' + (Math.random() * 100) + 'vw;width:' + size + 'px;height:' + size +
          'px;background:' + colors[i % colors.length] + ';z-index:9500;border-radius:' + (Math.random() < 0.5 ? '50%' : '2px') +
          ';pointer-events:none;opacity:0.95;';
        document.body.appendChild(d);
        var fall = 1200 + Math.random() * 1600;
        d.animate(
          [{ transform: 'translateY(0) rotate(0deg)' }, { transform: 'translateY(' + (window.innerHeight + 40) + 'px) rotate(' + (360 + Math.random() * 720) + 'deg)' }],
          { duration: fall, easing: 'cubic-bezier(.3,.7,.6,1)' }
        ).onfinish = function () { d.remove(); };
      })(i);
    }
  }
  function celebrate() { playComplete(); confetti(); }

  // Init HUD when DOM ready (only on pages that opt in via data-funfx-hud on <body>)
  function init() {
    if (document.body && document.body.hasAttribute('data-funfx-hud')) updateHUD();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  global.FunFX = {
    playCorrect: playCorrect, playWrong: playWrong, playComplete: playComplete,
    onCorrect: onCorrect, onWrong: onWrong, celebrate: celebrate, confetti: confetti,
    updateHUD: updateHUD, getPoints: getPoints, getBestStreak: getBestStreak,
    resetStreak: function () { streak = 0; updateHUD(); }
  };
})(window);
