import { 
  Trophy, 
  Zap, 
  Users, 
  Wallet, 
  Globe, 
  BarChart3, 
  ArrowUpRight 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useTheme } from '../hooks/useTheme';

const features = [
  {
    icon: Trophy,
    title: 'XP & Levels',
    description: 'Reward users with experience points and level progression to keep them engaged and coming back for more.',
    benefits: ['Progressive unlocks', 'Achievement tracking', 'Motivation boost']
  },
  {
    icon: Zap,
    title: 'Badges & Achievements',
    description: 'Create custom badges and achievements that recognize user milestones and special accomplishments.',
    benefits: ['Custom designs', 'Milestone tracking', 'Social sharing']
  },
  {
    icon: Users,
    title: 'Leaderboards',
    description: 'Foster healthy competition with dynamic leaderboards that showcase top performers and drive engagement.',
    benefits: ['Real-time updates', 'Multiple categories', 'Competitive spirit']
  },
  {
    icon: Wallet,
    title: 'Wallet Connect',
    description: 'Seamlessly integrate Web3 wallets for token rewards, NFTs, and blockchain-based achievements.',
    benefits: ['Multi-wallet support', 'Secure transactions', 'NFT rewards']
  },
  {
    icon: Globe,
    title: 'Web2 + Web3',
    description: 'Bridge traditional and blockchain gaming with hybrid systems that work for all your users.',
    benefits: ['Gradual adoption', 'Flexible rewards', 'Universal access']
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Get deep insights into user behavior, engagement patterns, and gamification effectiveness.',
    benefits: ['User insights', 'Performance metrics', 'Data-driven decisions']
  }
];

export function Features() {
  const { isRetro } = useTheme();

  return (
    <section className="py-24 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${
            isRetro ? 'retro-text font-mono' : ''
          }`}>
            Powerful Features
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${
            isRetro ? 'font-mono' : ''
          }`}>
            Everything you need to gamify your platform and boost user engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, benefits }) => (
            <Card 
              key={title}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isRetro ? 'pixelated border-2' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-primary/10 text-primary ${
                    isRetro ? 'pixelated' : ''
                  }`}>
                    <Icon className={`h-6 w-6 ${isRetro ? 'pixelated' : ''}`} />
                  </div>
                  <div>
                    <CardTitle className={`text-xl ${
                      isRetro ? 'retro-text font-mono' : ''
                    }`}>
                      {title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className={`text-base ${
                  isRetro ? 'font-mono' : ''
                }`}>
                  {description}
                </CardDescription>
                
                <div className="space-y-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowUpRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className={isRetro ? 'font-mono' : ''}>{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className={`w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors ${
                    isRetro ? 'retro-text pixelated' : ''
                  }`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}