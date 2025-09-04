import { useState } from 'react';
import { MessageCircle, Twitter, Github, Mail, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface FAQ {
  question: string;
  answer: string;
}

export function Community() {
  const { isRetro } = useTheme();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const communityLinks = [
    {
      platform: 'Discord',
      icon: MessageCircle,
      description: 'Join our community for real-time discussions, support, and updates',
      url: '#',
      members: '5,000+'
    },
    {
      platform: 'Twitter',
      icon: Twitter,
      description: 'Follow us for the latest announcements and protocol updates',
      url: '#',
      members: '10,000+'
    },
    {
      platform: 'GitHub',
      icon: Github,
      description: 'Contribute to our open-source repositories and track development',
      url: '#',
      members: '500+'
    },
    {
      platform: 'Newsletter',
      icon: Mail,
      description: 'Subscribe for weekly updates, feature releases, and ecosystem news',
      url: '#',
      members: '2,000+'
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'How does the Universal Wallet ensure security across multiple chains?',
      answer: 'The Universal Wallet uses Multi-Party Computation (MPC) and Smart Contract Account (SCA) technology to distribute key management across multiple parties while maintaining security. Private keys are never stored in a single location, and all transactions are cryptographically verified before execution.'
    },
    {
      question: 'Which blockchain networks are currently supported?',
      answer: 'Gami Protocol currently supports Solana, Base, Polygon, Bitcoin L3, Ethereum, and Binance Smart Chain. We are continuously adding support for additional networks based on community demand and ecosystem growth.'
    },
    {
      question: 'How does XP calculation work for cross-chain activities?',
      answer: 'Our XP Engine monitors events across all supported chains in real-time. Activities are weighted based on their complexity, value, and contribution to the ecosystem. XP is calculated using configurable algorithms that can be customized per application or use case.'
    },
    {
      question: 'Can I customize the reward mechanisms for my application?',
      answer: 'Yes, the Reward Orchestration system is fully customizable. You can define custom achievement criteria, NFT metadata, token distribution rules, and reward tiers. Partner integrations allow for external reward systems and cross-platform benefits.'
    },
    {
      question: 'What are the fees for using Gami Protocol?',
      answer: 'Gami Protocol operates on a usage-based pricing model. Basic integration is free for up to 1,000 monthly active users. Enterprise plans include additional features like custom SLA, dedicated support, and advanced analytics.'
    },
    {
      question: 'How do I handle transaction failures and rollbacks?',
      answer: 'The protocol includes built-in rollback capabilities and consistency checks. Failed transactions are automatically retried with exponential backoff, and all state changes are atomic. Detailed logs and monitoring help identify and resolve issues quickly.'
    },
    {
      question: 'Is there a testnet environment for development?',
      answer: 'Yes, we provide comprehensive testnet environments for all supported chains. Test tokens, sample data, and debugging tools are available to help developers build and test their integrations before deploying to mainnet.'
    },
    {
      question: 'How can I contribute to the Gami Protocol ecosystem?',
      answer: 'You can contribute through our GitHub repositories, participate in community governance, provide feedback, write documentation, or build applications using our protocol. We also have a grant program for innovative projects and integrations.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="py-24 bg-card/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isRetro ? 'retro-text font-mono' : ''
            }`}>
              Community & Support
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRetro ? 'font-mono' : ''
            }`}>
              Join our thriving community of developers, partners, and users building 
              the future of gamified decentralized applications
            </p>
          </div>

          {/* Community Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {communityLinks.map(({ platform, icon: Icon, description, url, members }) => (
              <a
                key={platform}
                href={url}
                className={`group p-6 rounded-xl bg-card/80 border hover:border-primary/50 hover:bg-card transition-all ${
                  isRetro ? 'pixelated' : ''
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4 ${
                    isRetro ? 'pixelated' : ''
                  }`}>
                    <Icon className={`h-8 w-8 text-primary ${isRetro ? 'pixelated' : ''}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 group-hover:text-primary transition-colors ${
                    isRetro ? 'font-mono' : ''
                  }`}>
                    {platform}
                  </h3>
                  <p className={`text-sm text-muted-foreground mb-3 ${
                    isRetro ? 'font-mono' : ''
                  }`}>
                    {description}
                  </p>
                  <span className={`text-xs text-primary font-medium ${
                    isRetro ? 'font-mono' : ''
                  }`}>
                    {members} members
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 ${
                isRetro ? 'font-mono' : ''
              }`}>
                Frequently Asked Questions
              </h3>
              <p className={`text-muted-foreground ${
                isRetro ? 'font-mono' : ''
              }`}>
                Common questions about wallets, bridging, XP, and rewards
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border rounded-xl overflow-hidden bg-card/50 ${
                    expandedFAQ === index ? 'border-primary/50' : 'border-border'
                  } ${isRetro ? 'pixelated' : ''}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-card/20 transition-colors"
                  >
                    <h4 className={`text-lg font-semibold pr-4 ${
                      isRetro ? 'font-mono' : ''
                    }`}>
                      {faq.question}
                    </h4>
                    {expandedFAQ === index ? (
                      <ChevronUp className={`h-5 w-5 text-primary flex-shrink-0 ${
                        isRetro ? 'pixelated' : ''
                      }`} />
                    ) : (
                      <ChevronDown className={`h-5 w-5 text-muted-foreground flex-shrink-0 ${
                        isRetro ? 'pixelated' : ''
                      }`} />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6 border-t border-border/50">
                      <p className={`text-muted-foreground mt-4 leading-relaxed ${
                        isRetro ? 'font-mono text-sm' : ''
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Support Contact */}
          <div className={`p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 text-center ${
            isRetro ? 'pixelated' : ''
          }`}>
            <div className="flex justify-center mb-6">
              <div className={`p-4 rounded-full bg-primary/10 ${isRetro ? 'pixelated' : ''}`}>
                <HelpCircle className={`h-8 w-8 text-primary ${isRetro ? 'pixelated' : ''}`} />
              </div>
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${
              isRetro ? 'font-mono' : ''
            }`}>
              Need Additional Support?
            </h3>
            <p className={`text-muted-foreground mb-6 max-w-2xl mx-auto ${
              isRetro ? 'font-mono' : ''
            }`}>
              Can't find the answer you're looking for? Our support team is here to help 
              with technical questions, integration guidance, and troubleshooting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@gamiprotocol.com"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors ${
                  isRetro ? 'font-mono pixelated' : ''
                }`}
              >
                <Mail className={`h-4 w-4 ${isRetro ? 'pixelated' : ''}`} />
                Contact Support
              </a>
              <a
                href="/docs"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 hover:bg-primary/10 transition-colors ${
                  isRetro ? 'font-mono pixelated' : ''
                }`}
              >
                <HelpCircle className={`h-4 w-4 ${isRetro ? 'pixelated' : ''}`} />
                Browse Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}