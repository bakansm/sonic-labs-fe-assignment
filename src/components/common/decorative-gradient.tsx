import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export function DecorativeGradient({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('relative w-full max-w-90', className)} {...props}>
      <div className='absolute inset-0 flex items-center justify-center'>{children}</div>
      <svg
        aria-hidden='true'
        className='w-full'
        fill='white'
        focusable='false'
        role='presentation'
        viewBox='0 0 368 48'
      >
        <defs>
          <linearGradient id='bgGradient'>
            <stop offset='0%' stopColor='#102D3C'></stop>
            <stop offset='20%' stopColor='#214E81'></stop>
            <stop offset='50%' stopColor='#506179'></stop>
            <stop offset='80%' stopColor='#ED5409'></stop>
            <stop offset='100%' stopColor='#FFCB67'></stop>
          </linearGradient>
          <mask id='gas-monetization-mask'>
            <path
              d='M23.9922 0H343.992V32C343.992 40.8366 336.829 48 327.992 48H39.9922C31.1556 48 23.9922 40.8366 23.9922 32V0Z'
              fill='white'
            ></path>
            <path d='M23.9922 24C23.9922 10.7477 13.2512 0.00427246 0 0H24V24H23.9922Z' fill='white'></path>
            <path d='M344 24H343.992V0H367.992C354.741 0.0042212 344 10.7478 344 24Z' fill='white'></path>
          </mask>
        </defs>
        <rect fill='url(#bgGradient)' height='48' mask='url(#gas-monetization-mask)' width='368'></rect>
      </svg>
    </div>
  );
}
