import { useState } from 'react';
import { Mail, Wallet, Check, Loader2 } from 'lucide-react';
import { usePrivy } from '../lib/privy-shim';

export function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { login, authenticated, user, logout } = usePrivy();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4">You're on the list!</h1>
          <p className="text-muted-foreground mb-6">
            We'll notify you as soon as Gami Protocol is ready for early access.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setEmail('');
            }}
            className="text-primary hover:underline"
          >
            Submit another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Join the Waitlist</h1>
          <p className="text-muted-foreground">
            Be the first to experience the future of Web3 gamification. Get early access to Gami Protocol.
          </p>
        </div>

        <div className="space-y-6">
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-border/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Joining...
                </>
              ) : (
                'Join Waitlist'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-1 border-t border-border/20"></div>
            <span className="px-3 text-sm text-muted-foreground">or</span>
            <div className="flex-1 border-t border-border/20"></div>
          </div>

          {/* Wallet Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Connect your wallet for priority access</h3>
            
            {authenticated && user ? (
              <div className="p-4 rounded-lg border border-border/20 bg-card/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Wallet className="w-5 h-5 text-primary mr-2" />
                    <span className="font-medium">Connected Wallet</span>
                  </div>
                  <button
                    onClick={logout}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Disconnect
                  </button>
                </div>
                <div className="text-sm text-muted-foreground">
                  {user.wallet?.address ? (
                    <span className="font-mono">
                      {user.wallet.address.slice(0, 6)}...{user.wallet.address.slice(-4)}
                    </span>
                  ) : (
                    user.email?.address || 'Connected'
                  )}
                </div>
                {user.wallet?.chainType && (
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {user.wallet.chainType === 'ethereum' ? 'EVM' : user.wallet.chainType.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={login}
                className="w-full flex items-center justify-center px-6 py-3 border border-border/20 rounded-lg hover:bg-accent/10 transition-colors"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet (EVM & Solana)
              </button>
            )}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            By joining, you agree to receive updates about Gami Protocol.
            <br />
            We respect your privacy and won't spam you.
          </div>
        </div>
      </div>
    </div>
  );
}