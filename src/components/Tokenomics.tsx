import React, { useMemo } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useTheme } from '../hooks/useTheme';

export default function Tokenomics({
  data,
}: {
  data?: any;
}) {
  const { theme } = useTheme();
  const defaultData = data || {
    sectionId: 'tokenomics',
    title: 'Tokenomics that reward real participation',
    subtitle: '$GAMI powers quests, staking boosts, governance, and omnichain reward flows.',
    totalSupply: 1000000000,
    allocations: [
      { label: 'Ecosystem & Airdrops', percent: 35, color: '#7C3AED', vesting: 'Programmatic via XP windows' },
      { label: 'Team & Advisors', percent: 20, color: '#06B6D4', vesting: '12m cliff, 36m linear' },
      { label: 'Treasury / DAO', percent: 20, color: '#22D3EE', vesting: 'Governance-managed' },
      { label: 'Strategic Partners', percent: 15, color: '#34D399', vesting: '6m cliff, 30m linear' },
      { label: 'Liquidity & MM', percent: 10, color: '#A78BFA', vesting: 'At TGE + managed' },
    ],
    utilities: [
      { title: 'Reward Currency', body: 'Earn $GAMI from verified quests and XP conversions across chains.' },
      { title: 'Staking Boosts', body: 'Stake to unlock XP multipliers, premium quests, and periodic yields.' },
      { title: 'Governance', body: 'Use $GAMI to propose and vote on protocol parameters and treasury spend.' },
      { title: 'Cross-Chain Gas', body: 'Fuel for L2 operations and bridging messages where applicable.' },
    ],
    vestingTimeline: [
      { bucket: 'Team & Advisors', cliffMonths: 12, linearMonths: 36 },
      { bucket: 'Strategic Partners', cliffMonths: 6, linearMonths: 30 },
    ],
    claimContracts: [],
    treasury: {},
    faq: [
      { q: 'How is XP converted to $GAMI?', a: 'XP → Gami Points (off-chain) → $GAMI via periodic redemption windows with rate controls set by governance.' },
      { q: 'Is there a vesting schedule?', a: 'Yes. Team and partners are vested with cliffs and linear unlocks; ecosystem rewards unlock via programmatic campaigns.' },
      { q: 'Which chains are supported?', a: 'EVM + Solana at launch; bridging via LayerZero/Wormhole adapters.' },
    ],
  };

  const cfg = data ? data : defaultData;
  const total = cfg.totalSupply || 0;
  const slices = useMemo(() => cfg.allocations || [], [cfg.allocations]);

  const totals = useMemo(
    () => slices.map((s: any) => ({ ...s, tokens: Math.round((s.percent / 100) * total) })),
    [slices, total]
  );

  return (
    <section id={cfg.sectionId || 'tokenomics'} className={`mx-auto max-w-6xl px-6 py-16 ${theme === 'retro' ? 'retro-filter' : ''}`}>
      <div className="rounded-2xl bg-gradient-to-b from-[#0f1626]/60 to-[#0b0f18]/60 p-8 shadow-lg">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{cfg.title}</h2>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">{cfg.subtitle}</p>
        </header>

        {/* Utilities */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          {(cfg.utilities || []).map((u: any) => (
            <div key={u.title} className="rounded-xl bg-white/3 p-5 backdrop-blur-sm border border-white/6">
              <h3 className="font-semibold text-white">{u.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{u.body}</p>
            </div>
          ))}
        </div>

        {/* Supply & Allocation */}
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-white/3 p-6 border border-white/6">
            <h3 className="mb-3 text-xl font-semibold text-white">Supply & Allocation</h3>
            <p className="mb-4 text-sm text-slate-300">Total Supply: {total.toLocaleString()} $GAMI</p>
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={slices} dataKey="percent" outerRadius={90} innerRadius={48} paddingAngle={3}>
                    {slices.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend wrapperStyle={{ color: '#cbd5e1' }} />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-xl bg-white/3 p-6 border border-white/6">
            <h3 className="mb-3 text-xl font-semibold text-white">Allocation Breakdown</h3>
            <div className="space-y-3">
              {totals.map((r: any) => (
                <div key={r.label} className="flex items-center justify-between p-3 rounded-lg bg-transparent">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-3" style={{ background: r.color }} />
                    <div>
                      <div className="font-medium text-white">{r.label}</div>
                      <div className="text-xs text-slate-300">{r.vesting}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">{r.percent}%</div>
                    <div className="text-xs text-slate-300">{r.tokens.toLocaleString()} tokens</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vesting & Emissions */}
        <div className="mb-8 rounded-xl bg-white/3 p-6 border border-white/6">
          <h3 className="mb-3 text-xl font-semibold text-white">Vesting & Emissions</h3>
          <div className="mt-4">
            <div className="w-full overflow-auto">
              <div className="min-w-[720px]">
                <BarChart width={720} height={160} data={cfg.vestingTimeline || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#0b1220" />
                  <XAxis dataKey="bucket" tick={{ fill: '#cbd5e1' }} />
                  <YAxis tick={{ fill: '#cbd5e1' }} />
                  <Tooltip wrapperStyle={{ color: '#000' }} />
                  <Bar dataKey="cliffMonths" stackId="a" fill="#7C3AED" name="Cliff (months)" />
                  <Bar dataKey="linearMonths" stackId="a" fill="#06B6D4" name="Linear (months)" />
                </BarChart>
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-300">Example vesting policies: team/advisors 12m cliff + 36m linear; partners 6m cliff + 30m linear.</p>
          </div>
        </div>

        {/* Contracts & Treasury */}
        {(cfg.claimContracts || []).length > 0 || cfg.treasury?.address ? (
          <div className="mb-8 rounded-xl bg-white/3 p-6 border border-white/6">
            <h3 className="mb-3 text-xl font-semibold text-white">Claim & Treasury</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {(cfg.claimContracts || []).map((c: any) => (
                <div key={c.network} className="p-4 rounded-md bg-transparent border border-white/6">
                  <div className="text-sm text-slate-300">{c.network} Claim</div>
                  <div className="font-mono text-sm text-white mt-2 truncate">{c.address || c.programId || 'TBD'}</div>
                </div>
              ))}
              {cfg.treasury?.address && (
                <div className="p-4 rounded-md bg-transparent border border-white/6">
                  <div className="text-sm text-slate-300">Treasury ({cfg.treasury.network})</div>
                  <div className="font-mono text-sm text-white mt-2 truncate">{cfg.treasury.address}</div>
                </div>
              )}
            </div>
          </div>
        ) : null}

        {/* FAQ */}
        <div className="rounded-xl bg-white/3 p-6 border border-white/6">
          <h3 className="mb-3 text-xl font-semibold text-white">Tokenomics FAQs</h3>
          <div className="divide-y divide-white/6">
            {(cfg.faq || []).map((f: any, i: number) => (
              <details key={i} className="py-3">
                <summary className="cursor-pointer font-medium text-white">{f.q}</summary>
                <p className="mt-2 text-sm text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">Email + wallet data processed with consent. PII minimized. See Privacy Policy.</p>
        </div>
      </div>
    </section>
  );
}
