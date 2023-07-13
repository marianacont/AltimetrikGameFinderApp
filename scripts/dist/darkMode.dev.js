"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModeFromLocalStorage = exports.darkModeListener = void 0;
var storagedMode = localStorage.getItem('mode');
var body = document.querySelector('body');

var enableDarkMode = function enableDarkMode() {
  if (!body.classList.contains("dark-mode")) {
    body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
  }
};

var darkModeListener = function darkModeListener(btn) {
  var btnMain = document.getElementById('dark-mode-btn-main');
  var btnMenu = document.getElementById('dark-mode-btn-menu');
  btn.addEventListener('click', enableDarkMode);
  btn.addEventListener('click', function () {
    if (localStorage.mode === "dark") {
      btnMain.classList.add('active');
      btnMenu.classList.add('active');
    } else {
      btnMain.classList.remove('active');
      btnMenu.classList.remove('active');
    }
  });
};

exports.darkModeListener = darkModeListener;

var getModeFromLocalStorage = function getModeFromLocalStorage() {
  console.log(storagedMode);

  if (storagedMode === 'dark') {
    console.log(storagedMode);
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
};

exports.getModeFromLocalStorage = getModeFromLocalStorage;