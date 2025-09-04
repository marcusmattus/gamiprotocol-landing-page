import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useTheme } from '../hooks/useTheme';

export function CTA() {
  const { isRetro } = useTheme();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {isRetro ? (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30">
            <div className="absolute inset-0 opacity-20 pixelated bg-[linear-gradient(45deg,transparent_48%,hsl(var(--primary))_48%,hsl(var(--primary))_52%,transparent_52%)] bg-[length:20px_20px]" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20" />
        )}
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border ${
              isRetro ? 'pixelated retro-text font-mono' : ''
            }`}>
              <Sparkles className="h-4 w-4" />
              <span>Ready to level up?</span>
            </div>
          </div>

          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${
            isRetro ? 'retro-text font-mono' : ''
          }`}>
            Start Gamifying
            <span className="text-primary"> Today</span>
          </h2>

          <p className={`text-xl text-muted-foreground ${
            isRetro ? 'font-mono' : ''
          }`}>
            Join thousands of platforms already using Gami Protocol to boost engagement,
            increase retention, and drive growth through powerful gamification.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild
              size="lg"
              className={`text-lg px-8 py-6 ${
                isRetro ? 'retro-text pixelated' : ''
              }`}
            >
              <Link to="/waitlist">
                <Rocket className="mr-2 h-5 w-5" />
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild
              variant="outline"
              size="lg"
              className={`text-lg px-8 py-6 ${
                isRetro ? 'retro-text pixelated border-2' : ''
              }`}
            >
              <Link to="/docs">
                Learn More
              </Link>
            </Button>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 ${
            isRetro ? 'font-mono' : ''
          }`}>
            <div className="space-y-2">
              <div className={`text-3xl font-bold text-primary ${
                isRetro ? 'retro-text' : ''
              }`}>
                10k+
              </div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className={`text-3xl font-bold text-primary ${
                isRetro ? 'retro-text' : ''
              }`}>
                99.9%
              </div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className={`text-3xl font-bold text-primary ${
                isRetro ? 'retro-text' : ''
              }`}>
                24/7
              </div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}