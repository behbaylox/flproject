document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    body.classList.add('dark-theme');
    toggleBtn.textContent = 'Light Theme';
  } else {
    toggleBtn.textContent = 'Dark Theme';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    toggleBtn.textContent = isDark ? 'Light Theme' : 'Dark Theme';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
if (!localStorage.getItem('theme')) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-theme');
    document.getElementById('theme-toggle').textContent = 'Light Theme';
  }
}



