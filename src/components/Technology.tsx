import { Server, Database, Activity, Shield, Code, Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Technology() {
  const { isRetro } = useTheme();

  const techStack = [
    {
      category: 'Backend Services',
      icon: Server,
      technologies: [
        'Node.js microservices architecture',
        'Rust smart contract execution engine',
        'Python data processing pipelines',
        'Go high-performance networking'
      ]
    },
    {
      category: 'Data Infrastructure',
      icon: Database,
      technologies: [
        'PostgreSQL for transactional data',
        'Redis for caching and sessions',
        'BigQuery for analytics and reporting',
        'IPFS for decentralized storage'
      ]
    },
    {
      category: 'API Layer',
      icon: Code,
      technologies: [
        'REST APIs for standard operations',
        'GraphQL for flexible queries',
        'WebSockets for real-time updates',
        'gRPC for internal communication'
      ]
    }
  ];

  const monitoring = [
    {
      title: 'System Health Monitoring',
      description: 'Real-time monitoring of all system components with automated alerting and incident response.',
      features: ['24/7 uptime monitoring', 'Performance metrics', 'Error tracking', 'Automated scaling']
    },
    {
      title: 'Reliability & Consistency',
      description: 'Enterprise-grade reliability with redundancy, backups, and disaster recovery procedures.',
      features: ['Multi-region deployment', 'Automated backups', 'Disaster recovery', 'Load balancing']
    },
    {
      title: 'Security & Compliance',
      description: 'Comprehensive security measures including encryption, auditing, and compliance frameworks.',
      features: ['End-to-end encryption', 'Regular security audits', 'Compliance certifications', 'Access controls']
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
              Technology & Infrastructure
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRetro ? 'font-mono' : ''
            }`}>
              Built on enterprise-grade infrastructure with cutting-edge technology 
              to ensure scalability, security, and reliability at every level
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {techStack.map(({ category, icon: Icon, technologies }) => (
              <div
                key={category}
                className={`p-6 rounded-xl bg-card/80 border hover:border-primary/50 transition-all ${
                  isRetro ? 'pixelated' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-primary/10 ${isRetro ? 'pixelated' : ''}`}>
                    <Icon className={`h-6 w-6 text-primary ${isRetro ? 'pixelated' : ''}`} />
                  </div>
                  <h3 className={`text-xl font-semibold ${
                    isRetro ? 'font-mono' : ''
                  }`}>
                    {category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {technologies.map((tech, index) => (
                    <li key={index} className={`flex items-center gap-3 ${
                      isRetro ? 'font-mono text-sm' : ''
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-primary ${
                        isRetro ? 'pixelated' : ''
                      }`} />
                      <span className="text-muted-foreground">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Monitoring & Reliability Section */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-xl bg-primary/10 ${isRetro ? 'pixelated' : ''}`}>
                  <Activity className={`h-8 w-8 text-primary ${isRetro ? 'pixelated' : ''}`} />
                </div>
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${
                isRetro ? 'font-mono' : ''
              }`}>
                Monitoring & Reliability
              </h3>
              <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
                isRetro ? 'font-mono' : ''
              }`}>
                Enterprise-grade monitoring and reliability ensures your applications 
                run smoothly with maximum uptime and performance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {monitoring.map(({ title, description, features }) => (
                <div
                  key={title}
                  className={`p-6 rounded-xl bg-card/60 border border-primary/10 ${
                    isRetro ? 'pixelated' : ''
                  }`}
                >
                  <h4 className={`text-lg font-semibold mb-3 ${
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
                    {features.map((feature, index) => (
                      <li key={index} className={`flex items-center gap-2 ${
                        isRetro ? 'font-mono text-sm' : ''
                      }`}>
                        <Shield className={`h-4 w-4 text-primary flex-shrink-0 ${
                          isRetro ? 'pixelated' : ''
                        }`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Status Page Link */}
            <div className="text-center mt-8">
              <a
                href="/status"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors ${
                  isRetro ? 'font-mono pixelated' : ''
                }`}
              >
                <Globe className={`h-4 w-4 ${isRetro ? 'pixelated' : ''}`} />
                View Real-Time Status
              </a>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: '99.9%', label: 'Uptime Guarantee' },
              { metric: '<100ms', label: 'API Response Time' },
              { metric: '50+', label: 'Blockchain Networks' },
              { metric: '24/7', label: 'Monitoring & Support' }
            ].map(({ metric, label }) => (
              <div
                key={label}
                className={`text-center p-6 rounded-xl bg-card/50 border ${
                  isRetro ? 'pixelated' : ''
                }`}
              >
                <div className={`text-3xl md:text-4xl font-bold text-primary mb-2 ${
                  isRetro ? 'font-mono' : ''
                }`}>
                  {metric}
                </div>
                <div className={`text-sm text-muted-foreground ${
                  isRetro ? 'font-mono' : ''
                }`}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}