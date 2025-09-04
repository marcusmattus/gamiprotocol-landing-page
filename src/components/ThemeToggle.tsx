import { Monitor, Moon, Sun, Gamepad2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme, toggleMode, isRetro, isDark } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2" role="toolbar" aria-label="Theme controls">
      {/* Theme Toggle (Modern/Retro) */}
      <div className="bg-card/80 backdrop-blur-sm border rounded-lg p-1 flex items-center" role="group" aria-label="Visual style">
        <Button
          aria-pressed={theme === 'modern'}
          variant={theme === 'modern' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setTheme('modern')}
          className={`px-3 flex items-center ${theme === 'modern' ? '' : 'hover:bg-accent'}`}
        >
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline ml-2">Modern</span>
        </Button>
        <Button
          aria-pressed={theme === 'retro'}
          variant={theme === 'retro' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setTheme('retro')}
          className={`px-3 flex items-center ${theme === 'retro' ? '' : 'hover:bg-accent'} ${isRetro ? 'retro-text' : ''}`}
        >
          <Gamepad2 className="h-4 w-4" />
          <span className="hidden sm:inline ml-2">Retro</span>
        </Button>
      </div>

      {/* Dark/Light Mode Toggle */}
      <Button
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        variant="outline"
        size="sm"
        onClick={toggleMode}
        className="bg-card/80 backdrop-blur-sm flex items-center"
      >
        {isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
        <span className="sr-only">
          Switch to {isDark ? 'light' : 'dark'} mode
        </span>
      </Button>
    </div>
  );
}