import { Shield, Zap, Globe, Trophy, Users, Coins } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function About() {
  const { isRetro } = useTheme();

  const benefits = [
    {
      icon: Globe,
      title: 'Cross-Chain Interoperability',
      description: 'Seamlessly operate across Solana, Base, Polygon, Bitcoin L3, and more with unified infrastructure.'
    },
    {
      icon: Shield,
      title: 'Secure Universal Wallet',
      description: 'Advanced MPC and SCA technology ensures enterprise-grade security for multi-chain operations.'
    },
    {
      icon: Zap,
      title: 'Gamified User Engagement',
      description: 'Drive retention and activity through XP systems, achievements, and dynamic NFT rewards.'
    },
    {
      icon: Trophy,
      title: 'Dynamic Reward Systems',
      description: 'Intelligent reward orchestration that adapts to user behavior and ecosystem needs.'
    },
    {
      icon: Users,
      title: 'Developer-First Platform',
      description: 'Comprehensive APIs, SDKs, and documentation for rapid integration and deployment.'
    },
    {
      icon: Coins,
      title: 'Scalable Infrastructure',
      description: 'Built for enterprise scale with monitoring, reliability, and consistent performance.'
    }
  ];

  return (
    <section className="py-24 bg-card/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isRetro ? 'retro-text font-mono' : ''
            }`}>
              What is Gami Protocol?
            </h2>
            <p className={`text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed ${
              isRetro ? 'font-mono' : ''
            }`}>
              Gami Protocol is a comprehensive decentralized infrastructure that transforms how applications 
              reward and engage users. By combining universal wallet technology, cross-chain XP systems, 
              and intelligent reward orchestration, we enable developers to build gamified experiences 
              that drive meaningful user engagement across multiple blockchain networks.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className={`group p-6 rounded-xl bg-card/80 border hover:bg-card hover:border-primary/50 transition-all duration-300 ${
                  isRetro ? 'pixelated' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors ${
                    isRetro ? 'pixelated' : ''
                  }`}>
                    <Icon className={`h-6 w-6 text-primary ${isRetro ? 'pixelated' : ''}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 group-hover:text-primary transition-colors ${
                      isRetro ? 'font-mono' : ''
                    }`}>
                      {title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${
                      isRetro ? 'font-mono text-sm' : ''
                    }`}>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-16">
            <p className={`text-lg text-muted-foreground mb-6 ${
              isRetro ? 'font-mono' : ''
            }`}>
              Ready to revolutionize user engagement in your application?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#core-components"
                className={`inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors ${
                  isRetro ? 'font-mono pixelated' : ''
                }`}
              >
                Explore Core Components
              </a>
              <a
                href="#developer-resources"
                className={`inline-flex items-center px-6 py-3 rounded-lg border border-primary/50 hover:bg-primary/10 transition-colors ${
                  isRetro ? 'font-mono pixelated' : ''
                }`}
              >
                Developer Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}