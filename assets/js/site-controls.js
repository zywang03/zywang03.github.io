;(function() {
  function storedTheme() {
    try {
      return localStorage.getItem('theme')
    } catch (e) {
      return null
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme
    var button = document.querySelector('[data-theme-toggle]')

    if (button) {
      var icon = button.querySelector('i')
      if (!icon) {
        icon = document.createElement('i')
        icon.setAttribute('aria-hidden', 'true')
        button.textContent = ''
        button.appendChild(icon)
      }

      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
      button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false')
      button.setAttribute('title', theme === 'dark' ? 'Light mode' : 'Dark mode')
    }
  }

  var theme = storedTheme() || document.documentElement.dataset.theme || 'light'
  applyTheme(theme)

  var button = document.querySelector('[data-theme-toggle]')
  if (button) {
    button.addEventListener('click', function() {
      theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
      saveTheme(theme)
      applyTheme(theme)
    })
  }
})()
