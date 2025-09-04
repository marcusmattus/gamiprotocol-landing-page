import { useState } from 'react';
import { ChevronDown, ChevronRight, Wallet, Zap, Trophy, Link as LinkIcon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface Component {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  details: string[];
  features: string[];
}

export function CoreComponents() {
  const { isRetro } = useTheme();
  const [expandedComponent, setExpandedComponent] = useState<string | null>('universal-wallet');

  const components: Component[] = [
    {
      id: 'universal-wallet',
      title: 'Universal Wallet (SCA & MPC)',
      icon: Wallet,
      description: 'Secure, multi-chain wallet infrastructure powered by Smart Contract Accounts and Multi-Party Computation technology.',
      details: [
        'Multi-Party Computation (MPC) for distributed key management',
        'Smart Contract Account (SCA) abstraction for gasless transactions',
        'Cross-chain transaction routing and execution',
        'Enterprise-grade security with hardware-backed signatures'
      ],
      features: [
        'Support for Solana, Base, Polygon, Bitcoin L3',
        'Gasless transaction capabilities',
        'Social recovery mechanisms',
        'Batch transaction processing'
      ]
    },
    {
      id: 'xp-engine',
      title: 'XP Engine',
      icon: Zap,
      description: 'Event-driven experience point system that tracks user actions across chains and calculates rewards in real-time.',
      details: [
        'Real-time event ingestion from multiple blockchain networks',
        'Configurable XP calculation algorithms',
        'Transaction rollback and consistency mechanisms',
        'Historical data analytics and reporting'
      ],
      features: [
        'Custom event definitions and triggers',
        'Multi-chain activity aggregation',
        'Leaderboard and ranking systems',
        'Achievement unlock mechanics'
      ]
    },
    {
      id: 'reward-orchestration',
      title: 'Reward Orchestration',
      icon: Trophy,
      description: 'Intelligent system that mints NFTs, distributes tokens, and manages rewards based on user XP and achievements.',
      details: [
        'Dynamic NFT minting based on achievement criteria',
        'Token swapping and distribution mechanisms',
        'Partner integration for external reward systems',
        'Automated reward tier progression'
      ],
      features: [
        'Custom NFT collections and metadata',
        'Multi-token reward distribution',
        'Partner ecosystem integrations',
        'Fraud prevention and validation'
      ]
    },
    {
      id: 'cross-chain-bridging',
      title: 'Cross-Chain Bridging',
      icon: LinkIcon,
      description: 'Unified bridging infrastructure using LayerZero, Wormhole, and Hyperlane for seamless asset transfers.',
      details: [
        'Multi-protocol bridge aggregation (LayerZero, Wormhole, Hyperlane)',
        'Automatic route optimization for cost and speed',
        'Consistency checks and transaction verification',
        'Retry logic and failure recovery mechanisms'
      ],
      features: [
        'Cross-chain asset transfers',
        'Bridge route optimization',
        'Transaction status tracking',
        'Emergency pause mechanisms'
      ]
    }
  ];

  const toggleComponent = (componentId: string) => {
    setExpandedComponent(expandedComponent === componentId ? null : componentId);
  };

  return (
    <section id="core-components" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isRetro ? 'retro-text font-mono' : ''
            }`}>
              Core Components
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRetro ? 'font-mono' : ''
            }`}>
              Discover the four foundational pillars that power the Gami Protocol ecosystem
            </p>
          </div>

          {/* Components Accordion */}
          <div className="space-y-4">
            {components.map(({ id, title, icon: Icon, description, details, features }) => (
              <div
                key={id}
                className={`border rounded-xl overflow-hidden bg-card/50 hover:bg-card/80 transition-all ${
                  expandedComponent === id ? 'border-primary/50' : 'border-border'
                } ${isRetro ? 'pixelated' : ''}`}
              >
                {/* Component Header */}
                <button
                  onClick={() => toggleComponent(id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-card/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${isRetro ? 'pixelated' : ''}`}>
                      <Icon className={`h-6 w-6 text-primary ${isRetro ? 'pixelated' : ''}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-1 ${
                        isRetro ? 'font-mono' : ''
                      }`}>
                        {title}
                      </h3>
                      <p className={`text-muted-foreground ${
                        isRetro ? 'font-mono text-sm' : ''
                      }`}>
                        {description}
                      </p>
                    </div>
                  </div>
                  {expandedComponent === id ? (
                    <ChevronDown className={`h-5 w-5 text-primary ${isRetro ? 'pixelated' : ''}`} />
                  ) : (
                    <ChevronRight className={`h-5 w-5 text-muted-foreground ${isRetro ? 'pixelated' : ''}`} />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedComponent === id && (
                  <div className="px-6 pb-6 border-t border-border/50">
                    <div className="grid md:grid-cols-2 gap-8 pt-6">
                      {/* Technical Details */}
                      <div>
                        <h4 className={`text-lg font-semibold mb-4 ${
                          isRetro ? 'font-mono' : ''
                        }`}>
                          Technical Implementation
                        </h4>
                        <ul className="space-y-3">
                          {details.map((detail, index) => (
                            <li key={index} className={`flex items-start gap-3 ${
                              isRetro ? 'font-mono text-sm' : ''
                            }`}>
                              <div className={`w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 ${
                                isRetro ? 'pixelated' : ''
                              }`} />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className={`text-lg font-semibold mb-4 ${
                          isRetro ? 'font-mono' : ''
                        }`}>
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {features.map((feature, index) => (
                            <li key={index} className={`flex items-start gap-3 ${
                              isRetro ? 'font-mono text-sm' : ''
                            }`}>
                              <div className={`w-2 h-2 rounded-full bg-secondary/60 mt-2 flex-shrink-0 ${
                                isRetro ? 'pixelated' : ''
                              }`} />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Learn More Link */}
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <a
                        href={`/docs/${id}`}
                        className={`inline-flex items-center text-primary hover:text-primary/80 transition-colors ${
                          isRetro ? 'font-mono' : ''
                        }`}
                      >
                        Learn more about {title}
                        <ChevronRight className={`ml-1 h-4 w-4 ${isRetro ? 'pixelated' : ''}`} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className={`text-2xl font-semibold mb-4 ${
              isRetro ? 'font-mono' : ''
            }`}>
              Ready to integrate Gami Protocol?
            </h3>
            <p className={`text-muted-foreground mb-6 ${
              isRetro ? 'font-mono text-sm' : ''
            }`}>
              Explore our comprehensive documentation and developer resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/docs"
                className={`inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors ${
                  isRetro ? 'font-mono pixelated' : ''
                }`}
              >
                View Documentation
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