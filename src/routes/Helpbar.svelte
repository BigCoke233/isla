<script>
  import icon from "$lib/images/dark-mode.png"
  import { onMount } from 'svelte';

  const STORAGE_KEY = 'theme';
  const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

  const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
  };

  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

  const applyTheme = () => {
    const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
    let currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

    if (currentTheme === THEMES.DARK) {
      document.body.classList.remove(THEMES.LIGHT);
      document.body.classList.add(THEMES.DARK);
    } else {
      document.body.classList.remove(THEMES.DARK);
      document.body.classList.add(THEMES.LIGHT);
    }
  };

  const toggleTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      // clear storage
      localStorage.removeItem(STORAGE_KEY);
    } else {
      // store opposite of preference
      localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
    }

    applyTheme();
  };

  onMount(() => {
    applyTheme();
    window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
  });

</script>

<aside class="fixed top-0 right-0 p-5" id="helpbar">
    <button id="darkmode-switch" class="opacity-50" on:click={toggleTheme}><img src={icon} alt="darkmode switch" class="w-5" /></button>
</aside>