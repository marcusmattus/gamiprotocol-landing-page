import { ExternalLink, BookOpen, Code, Users, Zap, Network } from 'lucide-react';

export function DocsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to integrate Gami Protocol into your application and start rewarding user engagement.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="p-6 rounded-xl border border-border/20 bg-card/50">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">Quick Start</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Get up and running with Gami Protocol in minutes. Learn how to set up XP tracking, badges, and leaderboards.
            </p>
            <div className="flex items-center text-primary font-medium">
              <span>5 minute setup</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border/20 bg-card/50">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">API Reference</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Complete API documentation with examples for all endpoints, webhooks, and SDKs.
            </p>
            <div className="flex items-center text-primary font-medium">
              <span>REST & GraphQL</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border/20 bg-card/50">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">Guides & Tutorials</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Step-by-step guides for common use cases and advanced implementation patterns.
            </p>
            <div className="flex items-center text-primary font-medium">
              <span>Learn by example</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border/20 bg-card/50">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">Best Practices</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Learn from our experience building gamification systems that drive real engagement.
            </p>
            <div className="flex items-center text-primary font-medium">
              <span>Pro tips included</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border/20 bg-card/50">
            <div className="flex items-center mb-4">
              <Network className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">MCP Documentation</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Model Context Protocol integration guides for AI assistants and automated workflows with Gami Protocol.
            </p>
            <div className="flex items-center text-primary font-medium">
              <span>AI-powered gaming</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border/20 bg-card/50">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">MCP Server Setup</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Set up MCP servers to connect AI tools with Gami Protocol APIs for automated game management and analytics.
            </p>
            <div className="flex items-center text-primary font-medium">
              <span>Seamless integration</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="p-8 rounded-2xl border border-border/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <h2 className="text-2xl font-bold mb-4">Ready to dive deep?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Access our comprehensive GitBook documentation with detailed guides, API references, and real-world examples.
            </p>
            <a
              href="https://infinityidlabs.gitbook.io/gami-protocl-gitbook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Full Documentation
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}