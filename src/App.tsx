import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivyProvider } from './lib/privy-shim';
import { HomePage } from './pages/HomePage';
import { DocsPage } from './pages/DocsPage';
import { WaitlistPage } from './pages/WaitlistPage';
import { TokenomicsPage } from './pages/TokenomicsPage';

function App() {
  return (
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID}
      config={{
        loginMethods: ['wallet', 'email'],
        appearance: { 
          theme: 'light', 
          accentColor: '#6366f1',
        },
        embeddedWallets: { 
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
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
    </PrivyProvider>
  );
}

export default App;