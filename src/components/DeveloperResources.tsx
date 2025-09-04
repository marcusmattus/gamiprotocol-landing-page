import { Code, Smartphone, Bot, ExternalLink, Github, BookOpen, MessageCircle, Mail } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function DeveloperResources() {
  const { isRetro } = useTheme();

  const sdks = [
    {
      title: 'Web SDK',
      icon: Code,
      description: 'Complete TypeScript/JavaScript SDK for web applications',
      features: [
        'React hooks and components',
        'Wallet integration helpers',
        'XP tracking utilities',
        'Real-time event subscriptions'
      ],
      links: [
        { label: 'GitHub Repository', url: '#' },
        { label: 'NPM Package', url: '#' },
        { label: 'Documentation', url: '#' }
      ]
    },
    {
      title: 'Mobile SDK',
      icon: Smartphone,
      description: 'Native SDKs for iOS and Android applications',
      features: [
        'Swift and Kotlin implementations',
        'Biometric authentication',
        'Push notification support',
        'Offline transaction queuing'
      ],
      links: [
        { label: 'iOS Documentation', url: '#' },
        { label: 'Android Documentation', url: '#' },
        { label: 'Sample Apps', url: '#' }
      ]
    },
    {
      title: 'Bot Integration',
      icon: Bot,
      description: 'APIs and tools for chatbots and automated systems',
      features: [
        'Discord bot framework',
        'Telegram integration',
        'Slack app templates',
        'Webhook event handling'
      ],
      links: [
        { label: 'Bot Templates', url: '#' },
        { label: 'Webhook Guide', url: '#' },
        { label: 'API Reference', url: '#' }
      ]
    }
  ];

  const adapters = [
    {
      title: 'LayerZero Integration',
      description: 'Seamless cross-chain messaging and token transfers',
      capabilities: ['Omnichain token transfers', 'Cross-chain governance', 'Unified liquidity pools']
    },
    {
      title: 'Wormhole Connect',
      description: 'Multi-chain asset bridging and message passing',
      capabilities: ['Asset bridging', 'Guardian network security', 'Cross-chain NFTs']
    },
    {
      title: 'Hyperlane Network',
      description: 'Interchain communication and modular security',
      capabilities: ['Custom security models', 'Interchain accounts', 'Modular validators']
    }
  ];

  return (
    <section id="developer-resources" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isRetro ? 'retro-text font-mono' : ''
            }`}>
              Developer & Partner Resources
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRetro ? 'font-mono' : ''
            }`}>
              Everything you need to integrate Gami Protocol into your applications 
              and build the next generation of gamified experiences
            </p>
          </div>

          {/* SDKs & APIs */}
          <div className="mb-20">
            <h3 className={`text-3xl font-bold text-center mb-12 ${
              isRetro ? 'font-mono' : ''
            }`}>
              SDKs & APIs
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {sdks.map(({ title, icon: Icon, description, features, links }) => (
                <div
                  key={title}
                  className={`p-6 rounded-xl bg-card/80 border hover:border-primary/50 transition-all ${
                    isRetro ? 'pixelated' : ''
                  }`}
                >
                  {/* SDK Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-primary/10 ${isRetro ? 'pixelated' : ''}`}>
                      <Icon className={`h-6 w-6 text-primary ${isRetro ? 'pixelated' : ''}`} />
                    </div>
                    <h4 className={`text-xl font-semibold ${
                      isRetro ? 'font-mono' : ''
                    }`}>
                      {title}
                    </h4>
                  </div>

                  <p className={`text-muted-foreground mb-6 ${
                    isRetro ? 'font-mono text-sm' : ''
                  }`}>
                    {description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h5 className={`text-sm font-semibold mb-3 ${
                      isRetro ? 'font-mono' : ''
                    }`}>
                      Key Features
                    </h5>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className={`flex items-start gap-2 ${
                          isRetro ? 'font-mono text-sm' : ''
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 ${
                            isRetro ? 'pixelated' : ''
                          }`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="space-y-2">
                    {links.map(({ label, url }) => (
                      <a
                        key={label}
                        href={url}
                        className={`flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors ${
                          isRetro ? 'font-mono' : ''
                        }`}
                      >
                        <ExternalLink className={`h-3 w-3 ${isRetro ? 'pixelated' : ''}`} />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-Chain Adapters */}
          <div className="mb-20">
            <h3 className={`text-3xl font-bold text-center mb-12 ${
              isRetro ? 'font-mono' : ''
            }`}>
              Cross-Chain Adapters
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {adapters.map(({ title, description, capabilities }) => (
                <div
                  key={title}
                  className={`p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 ${
                    isRetro ? 'pixelated' : ''
                  }`}
                >
                  <h4 className={`text-lg font-semibold mb-3 text-primary ${
                    isRetro ? 'font-mono' : ''
                  }`}>
                    {title}
                  </h4>
                  <p className={`text-muted-foreground mb-4 ${
                    isRetro ? 'font-mono text-sm' : ''
                  }`}>
                    {description}
                  </p>
                  <ul className="space-y-2">
                    {capabilities.map((capability, index) => (
                      <li key={index} className={`flex items-center gap-2 ${
                        isRetro ? 'font-mono text-sm' : ''
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-primary ${
                          isRetro ? 'pixelated' : ''
                        }`} />
                        <span className="text-sm text-muted-foreground">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Onboarding */}
          <div className={`p-8 rounded-2xl bg-card/50 border text-center ${
            isRetro ? 'pixelated' : ''
          }`}>
            <h3 className={`text-3xl font-bold mb-6 ${
              isRetro ? 'font-mono' : ''
            }`}>
              Join the Ecosystem
            </h3>
            <p className={`text-lg text-muted-foreground mb-8 max-w-2xl mx-auto ${
              isRetro ? 'font-mono' : ''
            }`}>
              Ready to integrate Gami Protocol into your platform? Our team will guide you 
              through the onboarding process and help you maximize user engagement.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <a
                href="/partner-onboarding"
                className={`flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors ${
                  isRetro ? 'font-mono pixelated' : ''
                }`}
              >
                <Mail className={`h-6 w-6 ${isRetro ? 'pixelated' : ''}`} />
                <span className="text-sm font-medium">Partner Portal</span>
              </a>
              <a
                href="/docs"
                className={`flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors ${
                  isRetro ? 'font-mono pixelated' : ''
                }`}
              >
                <BookOpen className={`h-6 w-6 ${isRetro ? 'pixelated' : ''}`} />
                <span className="text-sm font-medium">Documentation</span>
              </a>
              <a
                href="https://github.com/gami-protocol"
                className={`flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors ${
                  isRetro ? 'font-mono pixelated' : ''
                }`}
              >
                <Github className={`h-6 w-6 ${isRetro ? 'pixelated' : ''}`} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}