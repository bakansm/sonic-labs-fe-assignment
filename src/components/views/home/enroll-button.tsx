'use client';
import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { Button, type ButtonProps } from '@/components/ui/button';

export function EnrollButton({ shape = 'circular', variant = 'gradient', ...props }: Omit<ButtonProps, 'onClick'>) {
  const { login, authenticated, ready } = usePrivy();
  const { push } = useRouter();

  const handleClick = () => {
    if (authenticated) {
      push('#');
    } else {
      login();
    }
  };

  return (
    <Button className='flex-1' disabled={!ready} onClick={handleClick} shape={shape} variant={variant} {...props}>
      {authenticated ? 'Enroll Now' : 'Login to enroll now'}
    </Button>
  );
}
