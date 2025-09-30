import { CoursesList } from '@/components/views/home/courses-list';

export default function CourseCatalogPage() {
  return (
    <main className='relative mx-auto w-full max-w-7xl space-y-30 py-30'>
      <div className='grid w-full grid-cols-1 space-y-2.5 md:grid-cols-2'>
        <h1 className='col-span-2 font-bold'>Explore Our Course Catalog</h1>
        <h5 className='col-span-1'>Find the right course to boost your skills and career.</h5>
      </div>
      <CoursesList />
    </main>
  );
}
