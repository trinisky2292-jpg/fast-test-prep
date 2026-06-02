/* grade.js — shared grade state + data routing for the FAST Test Prep app.
 * Grade 5 and Grade 6 content live side-by-side under data/grade5/ and data/grade6/.
 * Default grade is 6 (current student). Selection persists in localStorage. */
(function (global) {
  'use strict';
  var VALID = ['5', '6'];
  var KEY = 'fast-grade';

  function get() {
    var g = localStorage.getItem(KEY);
    return VALID.indexOf(g) >= 0 ? g : '6';
  }
  function set(g) {
    g = String(g);
    if (VALID.indexOf(g) >= 0) localStorage.setItem(KEY, g);
  }
  function dataPath(section) {
    return 'data/grade' + get() + '/' + section + '.json';
  }
  function ordinal() {
    return get() === '6' ? '6th' : '5th';
  }
  function label() {
    return ordinal() + ' Grade';
  }
  // Inject a Grade 5/6 dropdown into the element (by id or node). Reloads on change.
  function renderSwitcher(target) {
    var el = typeof target === 'string' ? document.getElementById(target) : target;
    if (!el) return;
    var g = get();
    el.innerHTML =
      '<label for="fast-grade-select" style="font-weight:600;margin-right:.4rem;color:#555;">Grade</label>' +
      '<select id="fast-grade-select" aria-label="Choose grade level" ' +
      'style="padding:.45rem .7rem;border-radius:8px;border:2px solid #2196F3;font-size:1rem;background:#fff;cursor:pointer;font-weight:600;color:#2196F3;">' +
      '<option value="6"' + (g === '6' ? ' selected' : '') + '>Grade 6</option>' +
      '<option value="5"' + (g === '5' ? ' selected' : '') + '>Grade 5</option>' +
      '</select>';
    var sel = el.querySelector('#fast-grade-select');
    sel.addEventListener('change', function () {
      set(sel.value);
      location.reload();
    });
  }

  global.FastGrade = {
    get: get,
    set: set,
    dataPath: dataPath,
    ordinal: ordinal,
    label: label,
    renderSwitcher: renderSwitcher
  };
})(window);
