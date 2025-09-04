import { ArrowRight, Shield, Zap, Globe, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useTheme } from '../hooks/useTheme';
import gamiLogo from '../assets/gami-logo.svg';

export function Hero() {
  const { isRetro } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {isRetro ? (
          // Retro pixelated background
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="absolute inset-0 opacity-30 pixelated bg-[radial-gradient(circle_at_center,transparent_20%,hsl(var(--primary))_21%,hsl(var(--primary))_22%,transparent_23%)] bg-[length:40px_40px]" />
          </div>
        ) : (
          // Modern gradient background
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/20">
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        )}
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src={gamiLogo} 
              alt="Gami Protocol" 
              className="h-32 md:h-40 w-auto"
            />
          </div>

          {/* Tagline and Mission */}
          <div className="space-y-6">
            <h1 className={`text-5xl md:text-7xl font-bold tracking-tight ${
              isRetro ? 'retro-text font-mono' : ''
            }`}>
              Gamifying 
              <span className="text-primary"> Decentralised Finance</span>
            </h1>
            <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
              isRetro ? 'font-mono' : ''
            }`}>
              A comprehensive ecosystem featuring universal wallet infrastructure, cross-chain XP engine, 
              and gamified reward orchestration for the next generation of DeFi applications.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, label: 'Universal Wallet', desc: 'SCA & MPC Security' },
              { icon: Zap, label: 'XP Engine', desc: 'Event-Driven Rewards' },
              { icon: Globe, label: 'Cross-Chain', desc: 'Multi-Network Support' },
              { icon: Wallet, label: 'NFT Rewards', desc: 'Dynamic Minting' }
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-3 p-6 rounded-lg bg-card/80 border hover:bg-card transition-colors ${
                  isRetro ? 'pixelated' : ''
                }`}
              >
                <Icon className={`h-10 w-10 text-primary ${isRetro ? 'pixelated' : ''}`} />
                <div className="text-center">
                  <h3 className={`text-sm font-semibold mb-1 ${
                    isRetro ? 'font-mono' : ''
                  }`}>
                    {label}
                  </h3>
                  <p className={`text-xs text-muted-foreground ${
                    isRetro ? 'font-mono' : ''
                  }`}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild
              size="lg"
              className={`text-lg px-8 py-6 bg-primary hover:bg-primary/90 ${
                isRetro ? 'retro-text pixelated' : ''
              }`}
            >
              <Link to="/waitlist">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild
              variant="outline"
              size="lg"
              className={`text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 ${
                isRetro ? 'retro-text pixelated' : ''
              }`}
            >
              <Link to="/docs">
                Read Whitepaper
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}