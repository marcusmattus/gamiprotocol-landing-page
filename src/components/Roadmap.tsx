import { CheckCircle, Circle, Clock, Mail, Github, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useTheme } from '../hooks/useTheme';

const roadmapMilestones = [
  {
    title: 'Beta Launch',
    description: 'Roll out the core Gami Protocol platform with XP system, badges and achievements, and basic leaderboards.',
    status: 'in-progress',
    quarter: 'Q4 2025',
    features: ['XP System', 'Badges & Achievements', 'Basic Leaderboards']
  },
  {
    title: 'Cross‑chain Expansion',
    description: 'Add support for the EVM chains (Ethereum, Polygon, Arbitrum) plus any other high‑priority networks to enable cross‑chain XP tracking and reward distribution.',
    status: 'upcoming',
    quarter: 'Q1 2026',
    features: ['Ethereum Support', 'Polygon Integration', 'Arbitrum Network', 'Cross-chain XP Tracking']
  },
  {
    title: 'Analytics & Quest Engine',
    description: 'Launch a robust analytics dashboard for platform metrics and introduce customizable quest creation tools so partners can define their own missions and reward logic.',
    status: 'upcoming',
    quarter: 'Q2 2026',
    features: ['Analytics Dashboard', 'Quest Creation Tools', 'Custom Missions', 'Partner Integration']
  },
  {
    title: 'Mobile Companion App',
    description: 'Release the companion app for iOS and Android with built‑in wallet connect, push notifications, and an easy way to claim rewards or track XP on the go.',
    status: 'upcoming',
    quarter: 'Q3 2026',
    features: ['iOS App', 'Android App', 'Push Notifications', 'Mobile Wallet Connect']
  },
  {
    title: 'DAO Launch & Tokenomics Finalization',
    description: 'Finalize the tokenomics model, deploy governance contracts, and execute the initial token distribution. Onboard users into the DAO to let them participate in governance. Also, deploy the in‑app marketplace for badges and NFT rewards, with analytics to track secondary market activity.',
    status: 'upcoming',
    quarter: 'Q4 2026',
    features: ['DAO Governance', 'Token Distribution', 'NFT Marketplace', 'Secondary Market Analytics']
  }
];

interface RoadmapMilestone {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  quarter: string;
  features?: string[];
}

// Sort milestones chronologically by quarter/year (Q1..Q4)
roadmapMilestones.sort((a, b) => {
  const parseQuarter = (q: string) => {
    const m = q.match(/Q(\d)\s*(\d{4})/);
    if (!m) return 0;
    const quarter = Number(m[1]);
    const year = Number(m[2]);
    return year * 10 + quarter; // simple sortable value
  };
  return parseQuarter(a.quarter) - parseQuarter(b.quarter);
});

export function Roadmap() {
  const { isRetro } = useTheme();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className={`w-6 h-6 text-green-500 ${isRetro ? 'pixelated' : ''}`} />;
      case 'in-progress':
        return <Clock className={`w-6 h-6 text-primary ${isRetro ? 'pixelated' : ''}`} />;
      default:
        return <Circle className={`w-6 h-6 text-muted-foreground ${isRetro ? 'pixelated' : ''}`} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500';
      case 'in-progress':
        return 'border-primary';
      default:
        return 'border-muted-foreground/30';
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isRetro ? 'retro-text font-mono' : ''
            }`}>
              Roadmap & Updates
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRetro ? 'font-mono' : ''
            }`}>
              Our journey to revolutionize Web3 gaming and engagement through gamification. 
              Follow our progress and upcoming milestones.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border"></div>

            <div className="space-y-12 mb-16">
              {roadmapMilestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={cn(
                    "relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 bg-background",
                    getStatusColor(milestone.status),
                    isRetro ? 'pixelated' : ''
                  )}>
                    {getStatusIcon(milestone.status)}
                  </div>

                  {/* Content */}
                  <div className="ml-6 sm:ml-8 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className={`text-xl font-bold ${
                        isRetro ? 'font-mono' : ''
                      }`}>
                        {milestone.title}
                      </h3>
                      <span className={`text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit ${
                        isRetro ? 'font-mono pixelated' : ''
                      }`}>
                        {milestone.quarter}
                      </span>
                    </div>
                    <p className={`text-muted-foreground leading-relaxed mb-4 ${
                      isRetro ? 'font-mono text-sm' : ''
                    }`}>
                      {milestone.description}
                    </p>
                    {milestone.features && (
                      <div className="flex flex-wrap gap-2">
                        {milestone.features.map((feature, featureIndex) => (
                          <Badge 
                            key={featureIndex} 
                            variant="secondary" 
                            className={`text-xs bg-accent/10 text-accent hover:bg-accent/20 transition-colors ${
                              isRetro ? 'font-mono pixelated' : ''
                            }`}
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Updates & Resources Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {/* Changelogs */}
            <div className={`p-6 rounded-xl bg-card/50 border ${
              isRetro ? 'pixelated' : ''
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-primary/10 ${isRetro ? 'pixelated' : ''}`}>
                  <FileText className={`h-6 w-6 text-primary ${isRetro ? 'pixelated' : ''}`} />
                </div>
                <h3 className={`text-2xl font-semibold ${
                  isRetro ? 'font-mono' : ''
                }`}>
                  Changelogs
                </h3>
              </div>
              <p className={`text-muted-foreground mb-6 ${
                isRetro ? 'font-mono text-sm' : ''
              }`}>
                Stay updated with the latest features, improvements, and bug fixes. 
                View detailed release notes and version history.
              </p>
              <div className="space-y-3">
                <a 
                  href="/changelog"
                  className={`flex items-center gap-2 text-primary hover:text-primary/80 transition-colors ${
                    isRetro ? 'font-mono' : ''
                  }`}
                >
                  <Github className={`h-4 w-4 ${isRetro ? 'pixelated' : ''}`} />
                  GitHub Release Notes
                </a>
                <a 
                  href="/blog"
                  className={`flex items-center gap-2 text-primary hover:text-primary/80 transition-colors ${
                    isRetro ? 'font-mono' : ''
                  }`}
                >
                  <FileText className={`h-4 w-4 ${isRetro ? 'pixelated' : ''}`} />
                  Feature Announcements
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className={`p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 ${
              isRetro ? 'pixelated' : ''
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-primary/10 ${isRetro ? 'pixelated' : ''}`}>
                  <Mail className={`h-6 w-6 text-primary ${isRetro ? 'pixelated' : ''}`} />
                </div>
                <h3 className={`text-2xl font-semibold ${
                  isRetro ? 'font-mono' : ''
                }`}>
                  Subscribe for Updates
                </h3>
              </div>
              <p className={`text-muted-foreground mb-6 ${
                isRetro ? 'font-mono text-sm' : ''
              }`}>
                Get weekly updates on new features, ecosystem developments, and 
                exclusive insights from the Gami Protocol team.
              </p>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`flex-1 px-4 py-2 rounded-lg border border-primary/20 bg-background focus:outline-none focus:border-primary ${
                      isRetro ? 'font-mono pixelated' : ''
                    }`}
                  />
                  <Button className={`px-6 ${
                    isRetro ? 'font-mono pixelated' : ''
                  }`}>
                    Subscribe
                  </Button>
                </div>
                <p className={`text-xs text-muted-foreground ${
                  isRetro ? 'font-mono' : ''
                }`}>
                  No spam, unsubscribe at any time. Follow us on social media for daily updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}