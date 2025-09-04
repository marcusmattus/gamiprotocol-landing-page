import { useState, useEffect } from 'react';

type Theme = 'modern' | 'retro';
type Mode = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  mode: Mode;
}

const DEFAULT_STATE: ThemeState = {
  theme: 'modern',
  mode: 'light'
};

function getInitialState(): ThemeState {
  if (typeof window === 'undefined') return DEFAULT_STATE;

  const saved = localStorage.getItem('gami-theme');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // fallthrough
    }
  }

  // Respect system preference
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return { theme: 'modern', mode: prefersDark ? 'dark' : 'light' };
}

export function useTheme() {
  const [state, setState] = useState<ThemeState>(() => getInitialState());

  useEffect(() => {
    const root = document.documentElement;

    // Apply theme class (keeps existing CSS approach)
    root.classList.remove('theme-modern', 'theme-retro');
    root.classList.add(`theme-${state.theme}`);

    // Also set a data attribute for easier CSS targeting
    try {
      root.dataset.skin = state.theme;
    } catch { /* noop */ }

    // Toggle pixelated helper class when in retro mode
    if (state.theme === 'retro') {
      root.classList.add('pixelated');
    } else {
      root.classList.remove('pixelated');
    }

    // Apply mode class
    if (state.mode === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');

    // Save to localStorage
    try {
      localStorage.setItem('gami-theme', JSON.stringify(state));
    } catch (e) {
      // ignore
    }
  }, [state]);

  // Listen for system color-scheme changes and update mode accordingly
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setState(prev => ({ ...prev, mode: e.matches ? 'dark' : 'light' }));
    };
    try {
      // Some browsers use addEventListener
      if (mql.addEventListener) mql.addEventListener('change', handler as any);
      else mql.addListener(handler as any);
    } catch { /* noop */ }

    return () => {
      try {
        if (mql.removeEventListener) mql.removeEventListener('change', handler as any);
        else mql.removeListener(handler as any);
      } catch { /* noop */ }
    };
  }, []);

  const setTheme = (theme: Theme) => setState(prev => ({ ...prev, theme }));
  const setMode = (mode: Mode) => setState(prev => ({ ...prev, mode }));
  const toggleMode = () => setState(prev => ({ ...prev, mode: prev.mode === 'light' ? 'dark' : 'light' }));

  return {
    theme: state.theme,
    mode: state.mode,
    setTheme,
    setMode,
    toggleMode,
    isRetro: state.theme === 'retro',
    isDark: state.mode === 'dark'
  };
}