import { Moon, Sun, Gamepad2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, mode, setTheme, setMode, isRetro, isDark } = useTheme();

  // Combined theme options: Modern Light, Modern Dark, Retro Light, Retro Dark
  const themeOptions = [
    { theme: 'modern', mode: 'light', label: 'Modern Light', icon: Sparkles, secondary: Sun },
    { theme: 'modern', mode: 'dark', label: 'Modern Dark', icon: Sparkles, secondary: Moon },
    { theme: 'retro', mode: 'light', label: 'Retro Light', icon: Gamepad2, secondary: Sun },
    { theme: 'retro', mode: 'dark', label: 'Retro Dark', icon: Gamepad2, secondary: Moon },
  ];

  const handleThemeChange = (newTheme: 'modern' | 'retro', newMode: 'light' | 'dark') => {
    setTheme(newTheme);
    setMode(newMode);
  };

  return (
    <div className="fixed top-20 left-4 z-50" role="toolbar" aria-label="Theme controls">
      <div className="bg-card/80 backdrop-blur-sm border rounded-lg p-1 grid grid-cols-2 gap-1" role="group" aria-label="Theme selection">
        {themeOptions.map(({ theme: optionTheme, mode: optionMode, label, icon: Icon, secondary: SecondaryIcon }) => {
          const isActive = theme === optionTheme && mode === optionMode;
          
          return (
            <Button
              key={`${optionTheme}-${optionMode}`}
              aria-pressed={isActive}
              variant={isActive ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleThemeChange(optionTheme, optionMode)}
              className={`px-2 py-2 flex flex-col items-center gap-1 h-auto min-w-[60px] ${
                isActive ? '' : 'hover:bg-accent'
              } ${optionTheme === 'retro' ? 'retro-text' : ''}`}
              title={label}
            >
              <div className="flex items-center gap-1">
                <Icon className="h-3 w-3" />
                <SecondaryIcon className="h-3 w-3" />
              </div>
              <span className="text-xs leading-none">
                {optionTheme === 'modern' ? 'Mod' : 'Ret'}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}