'use client';

import { type ComponentProps, useRef } from 'react';
import { DecorativeGradient } from '@/components/common/decorative-gradient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function CourseSearch({ className, ...props }: ComponentProps<'div'>) {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className={cn('mx-auto w-full max-w-200', className)} {...props}>
      <form className='flex w-full items-center rounded-full border bg-background'>
        <Input placeholder='Enter course name' ref={searchInputRef} />
        <Button color={'dark'} shape={'circular'} variant={'ghost'}>
          Search
        </Button>
      </form>
      <DecorativeGradient className='mx-auto max-w-70 md:max-w-90'>What do you want to do?</DecorativeGradient>
    </div>
  );
}
