import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { WalletConnect } from './WalletConnect';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Docs', href: '/docs' },
    { name: 'Tokenomics', href: '/tokenomics' },
    { name: 'Waitlist', href: '/waitlist' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="relative z-10 border-b border-border/20 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-white">G</span>
              </div>
              <span className="text-xl font-bold">Gami Protocol</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent/10"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <WalletConnect />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border/20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent/10"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <WalletConnect className="w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}