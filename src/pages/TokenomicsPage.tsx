import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Coins, TrendingUp, Users, Shield } from 'lucide-react';

const tokenDistribution = [
  { name: 'Community & Ecosystem', value: 40, color: '#6366f1' },
  { name: 'Team & Advisors', value: 20, color: '#8b5cf6' },
  { name: 'Public Sale', value: 15, color: '#06b6d4' },
  { name: 'Private Sale', value: 10, color: '#10b981' },
  { name: 'Treasury', value: 10, color: '#f59e0b' },
  { name: 'Liquidity', value: 5, color: '#ef4444' },
];

const vestingSchedule = [
  { period: 'TGE', team: 0, community: 5, public: 100, private: 10 },
  { period: '6M', team: 0, community: 15, public: 0, private: 20 },
  { period: '12M', team: 10, community: 25, public: 0, private: 35 },
  { period: '18M', team: 20, community: 35, public: 0, private: 50 },
  { period: '24M', team: 35, community: 50, public: 0, private: 75 },
  { period: '36M', team: 60, community: 75, public: 0, private: 100 },
  { period: '48M', team: 100, community: 100, public: 0, private: 100 },
];

const tokenUtility = [
  {
    icon: <Coins className="w-8 h-8 text-primary" />,
    title: 'Governance Rights',
    description: 'Vote on protocol upgrades, feature development, and treasury allocation decisions.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: 'Staking Rewards',
    description: 'Stake $GAMI tokens to earn rewards and access premium platform features.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Community Incentives',
    description: 'Earn tokens through participation in quests, challenges, and community events.',
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: 'Fee Discounts',
    description: 'Get reduced fees on platform transactions and priority access to new features.',
  },
];

export function TokenomicsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
            <Coins className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">$GAMI Tokenomics</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the economic model behind Gami Protocol's native token and its role in the ecosystem.
          </p>
        </div>

        {/* Token Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-16">
          <div className="text-center p-6 rounded-xl border border-border/20 bg-card/50">
            <div className="text-2xl font-bold text-primary mb-2">1B</div>
            <div className="text-sm text-muted-foreground">Total Supply</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-border/20 bg-card/50">
            <div className="text-2xl font-bold text-primary mb-2">$0.05</div>
            <div className="text-sm text-muted-foreground">Launch Price</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-border/20 bg-card/50">
            <div className="text-2xl font-bold text-primary mb-2">48M</div>
            <div className="text-sm text-muted-foreground">Vesting Period</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-border/20 bg-card/50">
            <div className="text-2xl font-bold text-primary mb-2">ERC-20</div>
            <div className="text-sm text-muted-foreground">Token Standard</div>
          </div>
        </div>

        {/* Token Distribution */}
        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Token Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                  >
                    {tokenDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Distribution Breakdown</h2>
            <div className="space-y-4">
              {tokenDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/20 bg-card/50">
                  <div className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold">{item.value}%</span>
                    <div className="text-sm text-muted-foreground">
                      {(item.value * 10).toLocaleString()}M tokens
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vesting Schedule */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Vesting Schedule</h2>
          <div className="h-80 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vestingSchedule}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="community" stackId="a" fill="#6366f1" name="Community" />
                <Bar dataKey="team" stackId="a" fill="#8b5cf6" name="Team" />
                <Bar dataKey="public" stackId="a" fill="#06b6d4" name="Public" />
                <Bar dataKey="private" stackId="a" fill="#10b981" name="Private" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Cumulative percentage of tokens unlocked over time by category
          </p>
        </div>

        {/* Token Utility */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Token Utility</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tokenUtility.map((utility, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border/20 bg-card/50">
                <div className="flex justify-center mb-4">{utility.icon}</div>
                <h3 className="text-lg font-bold mb-3">{utility.title}</h3>
                <p className="text-sm text-muted-foreground">{utility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tokenomics Diagram Placeholder */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Economic Flow</h2>
          <div className="p-12 rounded-2xl border-2 border-dashed border-border/30 bg-card/30">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-medium mb-2">Interactive Tokenomics Diagram</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive visual representation of token flow, staking mechanisms, and reward distribution will be displayed here.
              This diagram will show how tokens move through the ecosystem and create value for all participants.
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}