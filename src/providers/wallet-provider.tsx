'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import type { ReactNode } from 'react';
import { sonic } from 'viem/chains';
import { ENV } from '@/constants/env';

function requireEnv(value: string | undefined, name: string): string {
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export default function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <PrivyProvider
      appId={requireEnv(ENV.PRIVY_APP_ID, 'NEXT_PUBLIC_PRIVY_APP_ID')}
      clientId={requireEnv(ENV.PRIVY_CLIENT_ID, 'NEXT_PUBLIC_PRIVY_CLIENT_ID')}
      config={{
        appearance: {
          walletChainType: 'ethereum-only',
          walletList: ['metamask'],
        },
        defaultChain: sonic,
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'off',
          },
        },
        supportedChains: [sonic],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
