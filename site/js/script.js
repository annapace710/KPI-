// ===== SourceCraft Project Site Scripts =====

// Выделение активного пункта меню (по имени файла)
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});

// Плавная анимация прогресс-баров при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  const bars = document.querySelectorAll('.progress .bar');
  bars.forEach(function (bar) {
    const target = bar.getAttribute('data-value') || '0';
    setTimeout(function () {
      bar.style.width = target + '%';
    }, 150);
  });
});

// Простая фильтрация строк таблиц (поиск по тексту)
function filterTable(inputId, tableId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('keyup', function () {
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll('#' + tableId + ' tbody tr');
    rows.forEach(function (row) {
      const text = row.textContent.toLowerCase();
      row.style.display = text.indexOf(filter) !== -1 ? '' : 'none';
    });
  });
}
