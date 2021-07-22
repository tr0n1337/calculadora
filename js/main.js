'use strict';

// SWAP THEME
const b = document.querySelector('html')
const check = document.getElementById('checkbox')

check.addEventListener('change', () => {
  b.classList.toggle('dark-theme')
})