import { HeartIcon, StarIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, type CardProps, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Course } from '@/types/course';

export type CourseCardProps = CardProps & {
  course: Course;
};

export function CourseCard({ course, className, ...props }: CourseCardProps) {
  return (
    <Card
      className={cn('group hover:-translate-y-1 transition-transform duration-300 ease-out hover:shadow-lg', className)}
      {...props}
    >
      <Image
        alt={`Course ${course.title} thumnail`}
        className='bg-shade-2 transition-transform duration-500 ease-out group-hover:scale-105'
        height={900}
        src={'/image/temp'}
        width={1600}
      />
      <CardContent>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
        <div className='flex items-center gap-2.5'>
          {course.categories.map((category) => (
            <Badge color='dark' key={category.id} variant={'ghost'}>
              {category.name}
            </Badge>
          ))}
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-0.5'>
            {Array.from({ length: 5 }).map((_, index: number) => (
              <StarIcon className='size-5' key={`start ${index + 1}`} />
            ))}
          </div>
          <div className='flex items-center gap-0.5'>
            <UserIcon className='size-5' />
            <p className='text-hero-2'>{course.students}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className='gap-4'>
        <Button className='flex-1' shape={'circular'} variant={'gradient'}>
          Login to enroll now
        </Button>
        <Button color={'dark'} icon shape={'circular'} variant={'ghost'}>
          <HeartIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}
