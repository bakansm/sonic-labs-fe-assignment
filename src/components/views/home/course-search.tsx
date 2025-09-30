'use client';

import { DecorativeGradient } from '@/components/common/decorative-gradient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type CourseSearchProps = {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
};

export function CourseSearch({
  className,
  value,
  onChange,
  onSubmit,
  placeholder = 'Enter course name',
}: CourseSearchProps) {
  return (
    <div className={cn('mx-auto w-full max-w-200', className)}>
      <form
        className='flex w-full items-center rounded-full border bg-background'
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.();
        }}
      >
        <Input onChange={(e) => onChange(e.target.value)} placeholder={placeholder} value={value} />
        <Button color={'dark'} shape={'circular'} type='submit' variant={'ghost'}>
          Search
        </Button>
      </form>
      <DecorativeGradient className='mx-auto max-w-70 md:max-w-90'>What do you want to do?</DecorativeGradient>
    </div>
  );
}
