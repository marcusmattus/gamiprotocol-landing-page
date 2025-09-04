import { Outlet } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useTheme } from '../hooks/useTheme';

export function Layout() {
  const { theme, mode } = useTheme();

  return (
    <div className={`min-h-screen bg-background text-foreground theme-${theme} ${mode}`}>
      <ThemeToggle />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}