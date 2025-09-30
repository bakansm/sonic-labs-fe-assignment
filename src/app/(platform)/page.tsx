import { CourseCard } from '@/components/views/home/course-card';
import { CourseSearch } from '@/components/views/home/course-search';
import { courses } from '@/constants/courses-mock';

export default function CourseCatalogPage() {
  return (
    <main className='relative mx-auto w-full max-w-7xl space-y-30 py-30'>
      <div className='grid w-full grid-cols-1 space-y-2.5 md:grid-cols-2'>
        <h1 className='col-span-2 font-bold'>Explore Our Course Catalog</h1>
        <h5 className='col-span-1'>Find the right course to boost your skills and career.</h5>
      </div>
      <CourseSearch />
      <div className='grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-4'>
        {courses.map((course) => (
          <CourseCard className='col-span-1' course={course} key={course.id} />
        ))}
      </div>
    </main>
  );
}
