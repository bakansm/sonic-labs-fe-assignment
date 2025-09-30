'use client';

import { usePrivy } from '@privy-io/react-auth';
import { formatAddress } from '@/utils/wallet';
import { Button, type ButtonProps } from '../ui/button';

export function ConnectWalletButton({
  shape = 'circular',
  variant = 'gradient',
  ...props
}: Omit<ButtonProps, 'onClick'>) {
  const { login, authenticated, user, logout, ready } = usePrivy();

  const handleClick = () => {
    if (authenticated) {
      logout();
    } else {
      login();
    }
  };

  const walletAddress = user?.wallet?.address;

  return (
    <Button disabled={!ready} onClick={handleClick} shape={shape} variant={variant} {...props}>
      {authenticated && walletAddress ? formatAddress(walletAddress) : 'Connect Wallet'}
    </Button>
  );
}
