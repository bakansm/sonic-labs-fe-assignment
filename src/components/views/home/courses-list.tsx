'use client';

import { useMemo, useState } from 'react';
import { CourseCard } from '@/components/views/home/course-card';
import { CourseSearch } from '@/components/views/home/course-search';
import { courses } from '@/constants/courses-mock';

export function CoursesList() {
  const [query, setQuery] = useState('');

  const filteredCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter((course) => {
      const inTitle = course.title.toLowerCase().includes(q);
      const inDescription = course.description.toLowerCase().includes(q);
      const inCategories = course.categories.some((c) => c.name.toLowerCase().includes(q));
      return inTitle || inDescription || inCategories;
    });
  }, [query]);

  return (
    <div className='space-y-30'>
      <CourseSearch onChange={setQuery} value={query} />
      <div className='grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-4'>
        {filteredCourses.map((course) => (
          <CourseCard className='col-span-1' course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}
