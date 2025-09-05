import { Outlet } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useTheme } from '../hooks/useTheme';
import gamiLogo from '../assets/gami-logo.svg';
import gamiLogoRetro from '../assets/gami-logo-retro.svg';

export function Layout() {
  const { theme, mode } = useTheme();

  return (
    <div className={`min-h-screen bg-background text-foreground theme-${theme} ${mode} relative`}>
      {/* Background Logo Watermark */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.02] dark:opacity-[0.05]">
          <img 
            src={theme === 'retro' ? gamiLogoRetro : gamiLogo} 
            alt="Gami Protocol" 
            className="w-[800px] h-[400px] object-contain select-none"
            draggable={false}
          />
        </div>
      </div>

      <div className="relative z-10">
        <ThemeToggle />
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}