import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'h-9 w-full min-w-0 bg-transparent px-4 text-body outline-none',
        'placeholder:text-foreground-sub',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      data-slot='input'
      type={type}
      {...props}
    />
  );
}

export { Input };
