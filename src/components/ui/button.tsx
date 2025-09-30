import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { LoaderIcon } from 'lucide-react';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

const buttonVariants = cva(
  cn(
    'relative h-10 cursor-pointer px-6 outline-none transition-all',
    '[&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:outline-1',
  ),
  {
    compoundVariants: [
      {
        className: cn(
          'bg-shade-2/16 text-shade-2',
          'hover:border-shade-2/24 hover:bg-shade-2/24',
          'active:border-shade-2/8 active:bg-shade-2/8',
        ),
        color: 'dark',
        variant: 'ghost',
      },
      {
        className: cn(
          'bg-shade-light/16 text-shade-light',
          'hover:border-shade-light/24 hover:bg-shade-light/24',
          'active:border-shade-light/8 active:bg-shade-light/8',
        ),
        color: 'light',
        variant: 'ghost',
      },
      {
        className: cn('border text-foreground', 'hover:bg-shade-2/24', 'active:bg-shade-2/8'),
        color: 'dark',
        variant: 'outlined',
      },
      {
        className: cn('border text-foreground-reverse', 'hover:bg-shade-2/24', 'active:bg-shade-2/8'),
        color: 'light',
        variant: 'outlined',
      },
      {
        className: cn(
          'overflow-hidden bg-gradient text-foreground',
          'before:absolute before:inset-px before:rounded-full before:bg-sonic-black/80 before:content-[""]',
        ),
        shape: 'circular',
        variant: 'gradient',
      },
      {
        className: cn(
          'overflow-hidden bg-gradient text-foreground',
          'before:absolute before:inset-px before:rounded-xs before:bg-sonic-black/80 before:content-[""]',
        ),
        shape: 'rounded',
        variant: 'gradient',
      },
    ],
    defaultVariants: {
      color: 'dark',
      icon: false,
      shape: 'rounded',
      variant: 'gradient',
    },
    variants: {
      color: {
        dark: '',
        light: '',
      },
      icon: {
        false: '',
        true: '!p-0 aspect-square',
      },
      shape: {
        circular: 'rounded-full',
        rounded: 'rounded-xs',
      },
      variant: {
        ghost: '',
        gradient: '',
        outlined: '',
      },
    },
  },
);

export type ButtonProps = Omit<ComponentProps<'button'>, 'color'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    tooltip?: string;
    tooltipOptions?: ComponentProps<typeof Tooltip>;
    tooltipContentOptions?: ComponentProps<typeof TooltipContent>;
    tooltipProviderOptions?: ComponentProps<typeof TooltipProvider>;
  };

function Button({
  className,
  variant,
  icon,
  color,
  shape,
  asChild = false,
  loading = false,
  type = 'button',
  tooltip,
  tooltipOptions,
  tooltipContentOptions,
  tooltipProviderOptions,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  const button = (
    <Comp
      className={cn(
        buttonVariants({
          color,
          icon,
          shape,
          variant,
        }),
        className,
      )}
      data-slot='button'
      disabled={loading || props.disabled}
      type={type}
      {...props}
    >
      {loading ? (
        <LoaderIcon className={cn('animate-spin transition-all duration-200 ease-in-out')} />
      ) : (
        <span className='relative flex shrink-0 items-center justify-center gap-x-2 whitespace-nowrap text-body'>
          {children}
        </span>
      )}
    </Comp>
  );

  if (!tooltip) {
    return button;
  }

  return (
    <TooltipProvider delayDuration={100} {...tooltipProviderOptions}>
      <Tooltip {...tooltipOptions}>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent {...tooltipContentOptions}>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { Button, buttonVariants };
