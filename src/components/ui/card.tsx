import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type CardProps = Omit<ComponentProps<'div'>, 'color'> & {
  color: 'dark' | 'light';
};

function Card({ className, color, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-xl border',
        color === 'dark' && 'bg-background text-foreground',
        color === 'light' && 'bg-shade-light text-foreground-reverse',
        className,
      )}
      data-slot='card'
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center justify-between gap-2 p-4', className)} data-slot='card-header' {...props} />
  );
}

function CardTitle({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('font-bold text-body-lg', className)} data-slot='card-title' {...props} />;
}

function CardDescription({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('text-body text-foreground-sub', className)} data-slot='card-description' {...props} />;
}

function CardAction({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      data-slot='card-action'
      {...props}
    />
  );
}

function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('flex flex-col gap-2.5 px-4 pt-6 pb-4', className)} data-slot='card-content' {...props} />;
}

function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('flex items-center justify-between p-4', className)} data-slot='card-footer' {...props} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
