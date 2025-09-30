export type Category = {
  id: string | number;
  name: string;
};

export type Categories = Category[];

export type Course = {
  categories: Categories;
  description: string;
  id: string | number;
  rating: number;
  students: number;
  image: string | null;
  title: string;
  wishlist: boolean;
};

export type Courses = Course[];
