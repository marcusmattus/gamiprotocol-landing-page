import { usePrivy } from '../lib/privy-shim';
import { Button } from './ui/button';
import { Wallet, LogOut, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface WalletConnectProps {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export function WalletConnect({ variant = 'default', size = 'default', className }: WalletConnectProps) {
  const { login, logout, authenticated, user } = usePrivy();

  const handleConnect = () => {
    login();
  };

  const handleDisconnect = () => {
    logout();
  };

  if (authenticated && user) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-md">
          <User size={16} className="text-primary" />
          <span className="text-sm text-foreground">
            {user.wallet?.address ? 
              `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}` : 
              user.email?.address || 'Connected'
            }
          </span>
        </div>
        <Button
          onClick={handleDisconnect}
          variant="ghost"
          size={size}
          className={cn("gap-2", className)}
        >
          <LogOut size={16} />
          <span className="hidden sm:inline">Disconnect</span>
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={handleConnect}
      variant={variant}
      size={size}
      className={cn("gap-2", className)}
    >
      <Wallet size={16} />
      <span>Connect Wallet</span>
    </Button>
  );
}