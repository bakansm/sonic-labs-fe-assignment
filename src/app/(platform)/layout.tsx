import type { ReactNode } from 'react';
import { Header } from '@/components/layout/header';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PlatformLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ScrollArea className='relative h-screen w-full'>
      <Header />
      {children}
    </ScrollArea>
  );
}
