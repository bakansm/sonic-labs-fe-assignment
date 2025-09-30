import { GlobeIcon, MenuIcon } from 'lucide-react';
import { ConnectWalletButton } from '../common/connect-wallet-button';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-center bg-background'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-2.5'>
        <h1 className='text-body-lg'>Logo</h1>
        <div className='flex h-min items-center gap-x-2.5'>
          <ConnectWalletButton />
          <Button className='hidden sm:block' icon shape={'circular'} variant={'gradient'}>
            <GlobeIcon />
          </Button>
          <Button className='block sm:hidden' color={'dark'} icon shape={'circular'} variant={'outlined'}>
            <MenuIcon />
          </Button>
        </div>
      </div>
    </header>
  );
};
