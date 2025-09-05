import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Client-only Privy wrapper to reduce build-time bundling
function PrivyClientProvider({ children }: { children: React.ReactNode }) {
  const [PrivyProvider, setPrivyProvider] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    import('./lib/privy-shim')
      .then((mod) => mounted && setPrivyProvider(() => mod.PrivyProvider))
      .catch((err) => console.warn('Privy failed to load', err));
    return () => {
      mounted = false;
    };
  }, []);

  if (!PrivyProvider) return <>{children}</>;

  const Provider = PrivyProvider;
  return (
    <Provider
      appId={import.meta.env.VITE_PRIVY_APP_ID}
      config={{
        loginMethods: ['wallet', 'email'],
        appearance: { 
          theme: 'light', 
          accentColor: '#6366f1',
        },
        embeddedWallets: { 
          createOnLogin: 'users-without-wallets',
          noPromptOnSignature: false
        },
        defaultChain: 'solana-mainnet',
        supportedChains: ['ethereum', 'polygon', 'base', 'arbitrum', 'solana', 'solana-mainnet', 'solana-devnet'],
      }}
    >
      {children}
    </Provider>
  );
}
import { HomePage } from './pages/HomePage';
import { DocsPage } from './pages/DocsPage';
import { WaitlistPage } from './pages/WaitlistPage';
import { TokenomicsPage } from './pages/TokenomicsPage';

function App() {
  return (
    <PrivyClientProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="docs" element={<DocsPage />} />
            <Route path="waitlist" element={<WaitlistPage />} />
            <Route path="tokenomics" element={<TokenomicsPage />} />
          </Route>
        </Routes>
      </Router>
    </PrivyClientProvider>
  );
}

export default App;