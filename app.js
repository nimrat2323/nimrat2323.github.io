document.getElementById('aboutBtn').addEventListener('click', function() {
  document.getElementById('main-home').style.display = 'none';
  document.getElementById('main-about').style.display = 'block';
  window.scrollTo(0, 0);
});
document.getElementById('backBtn').addEventListener('click', function() {
  document.getElementById('main-home').style.display = 'block';
  document.getElementById('main-about').style.display = 'none';
  window.scrollTo(0, 0);
});
