import { Github, Twitter, MessageSquare, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../hooks/useTheme';
import gamiLogo from '../assets/gami-logo.svg';

const navigation = {
  protocol: [
    { name: 'Universal Wallet', href: '#core-components' },
    { name: 'XP Engine', href: '#core-components' },
    { name: 'Reward System', href: '#core-components' },
    { name: 'Cross-Chain Bridge', href: '#core-components' },
  ],
  developers: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'SDKs', href: '#developer-resources' },
    { name: 'GitHub', href: 'https://github.com/gami-protocol' },
  ],
  resources: [
    { name: 'Whitepaper', href: '/docs/whitepaper' },
    { name: 'Tokenomics', href: '/tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'License', href: '/license' },
  ],
};

const social = [
  { name: 'GitHub', href: 'https://github.com/gami-protocol', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com/gamiprotocol', icon: Twitter },
  { name: 'Discord', href: 'https://discord.gg/gamiprotocol', icon: MessageSquare },
  { name: 'Email', href: 'mailto:hello@gamiprotocol.com', icon: Mail },
];

export function Footer() {
  const { isRetro } = useTheme();

  return (
    <footer className={`border-t bg-muted/20 ${isRetro ? 'border-2' : ''}`}>
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={gamiLogo} 
                alt="Gami Protocol" 
                className="h-8 w-auto"
              />
            </div>
            <p className={`text-muted-foreground max-w-sm ${
              isRetro ? 'font-mono' : ''
            }`}>
              Gamifying Decentralised Finance through universal wallet infrastructure, 
              cross-chain XP systems, and intelligent reward orchestration.
            </p>
            <div className="flex gap-2">
              {social.map(({ name, href, icon: Icon }) => (
                <Button
                  key={name}
                  variant="ghost"
                  size="sm"
                  className={`h-9 w-9 p-0 ${
                    isRetro ? 'pixelated' : ''
                  }`}
                  asChild
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(navigation).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className={`font-semibold capitalize ${
                isRetro ? 'retro-text font-mono' : ''
              }`}>
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      className={`text-muted-foreground hover:text-foreground transition-colors ${
                        isRetro ? 'font-mono' : ''
                      }`}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={`border-t pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${
          isRetro ? 'border-2' : ''
        }`}>
          <p className={`text-muted-foreground text-sm ${
            isRetro ? 'font-mono' : ''
          }`}>
            © {new Date().getFullYear()} Gami Protocol. All rights reserved.
          </p>
          <div className={`flex gap-6 text-sm ${
            isRetro ? 'font-mono' : ''
          }`}>
            <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}