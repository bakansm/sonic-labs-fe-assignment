import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  cn(
    'relative flex h-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full px-3 font-medium text-xs transition-all',
    '[&>svg]:pointer-events-none [&>svg]:size-3',
  ),
  {
    compoundVariants: [
      {
        className: cn('bg-shade-2/16 text-shade-2'),
        color: 'light',
        variant: 'ghost',
      },
      {
        className: cn('bg-shade-light/16 text-shade-light'),
        color: 'dark',
        variant: 'ghost',
      },
      {
        className: cn(
          'bg-gradient text-foreground',
          'before:absolute before:inset-px before:rounded-full before:bg-sonic-black/80 before:content-[""]',
        ),
        variant: 'gradient',
      },
    ],
    defaultVariants: {
      color: 'dark',
      variant: 'gradient',
    },
    variants: {
      color: {
        dark: '',
        light: '',
      },
      variant: {
        ghost: '',
        gradient: '',
      },
    },
  },
);

function Badge({
  className,
  color,
  variant,
  asChild = false,
  children,
  ...props
}: ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={cn(badgeVariants({ color, variant }), className)} data-slot='badge' {...props}>
      <span className='relative inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap'>
        {children}
      </span>
    </Comp>
  );
}

export { Badge, badgeVariants };
