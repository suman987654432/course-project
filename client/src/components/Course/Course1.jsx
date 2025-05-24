import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import authorImg from '../../assets/girl.png';

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md ">
    <div className="h-52 overflow-hidden rounded-xl mb-5">
      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-[#2D3748] font-semibold mb-2">{course.title}</h3>
    <div className="flex items-center mb-4">
      <img src={course.instructorImage} alt={course.instructor} className="w-7 h-7 rounded-full mr-2" />
      <span className="text-sm text-gray-600">{course.instructor}</span>
    </div>
    <div className="relative h-2 bg-gray-200 rounded-full mb-1">
      <div
        className="absolute top-0 left-0 h-full bg-[#3ccbc6] rounded-full"
        style={{ width: `${(course.progress / course.totalLessons) * 100}%` }}
      ></div>
    </div>
    <div className="text-right text-xs text-gray-500">
      Lesson {course.progress} of {course.totalLessons}
    </div>
  </div>
);

const Course1 = () => {
  const courses = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      instructor: 'Lina',
      instructorImage: authorImg,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=3270&auto=format&fit=crop',
      progress: 5,
      totalLessons: 7,
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect',
      instructor: 'Lina',
      instructorImage: authorImg,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=3272&auto=format&fit=crop',
      progress: 5,
      totalLessons: 7,
    },
    {
      id: 3,
      title: 'AWS Certified Solutions Architect',
      instructor: 'Lina',
      instructorImage: authorImg,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3272&auto=format&fit=crop',
      progress: 5,
      totalLessons: 7,
    },
    {
      id: 4,
      title: 'Full Stack Development',
      instructor: 'Mark',
      instructorImage: authorImg,
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=3269&auto=format&fit=crop',
      progress: 3,
      totalLessons: 10,
    },
    {
      id: 5,
      title: 'React for Beginners',
      instructor: 'Sarah',
      instructorImage: authorImg,
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop',
      progress: 2,
      totalLessons: 8,
    },
    {
      id: 6,
      title: 'UX/UI Design Fundamentals',
      instructor: 'David',
      instructorImage: authorImg,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
      progress: 4,
      totalLessons: 6,
    },
  ];

 
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 1;

  const [desktopCurrentPage, setDesktopCurrentPage] = useState(1);
  const desktopCoursesPerPage = 3;
  const desktopTotalPages = Math.ceil(courses.length / desktopCoursesPerPage);

  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const mobileCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

 
  const prevDesktopPage = () => {
    setDesktopCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const nextDesktopPage = () => {
    setDesktopCurrentPage((prev) => Math.min(prev + 1, desktopTotalPages));
  };

  const indexOfLastDesktopCourse = desktopCurrentPage * desktopCoursesPerPage;
  const indexOfFirstDesktopCourse = indexOfLastDesktopCourse - desktopCoursesPerPage;
  const desktopCourses = courses.slice(indexOfFirstDesktopCourse, indexOfLastDesktopCourse);

  return (
  <div className="bg-[#F5F7FF] py-12 md:py-16 px-4 md:px-6 lg:px-8 mt-16 md:mt-13">
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-[#2D3748] md:text-3xl font-semibold">
          Welcome back, ready for your next lesson?
        </h1>
        <a href="#" className="text-[#3ccbc6] text-sm font-medium">
          View history
        </a>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="flex max-w-7xl mx-auto gap-10">
          {desktopCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Desktop pagination controls */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setDesktopCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={desktopCurrentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-md mr-2 ${
              desktopCurrentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#3ccbc6] text-white hover:bg-[#2bb8b3]'
            }`}
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => setDesktopCurrentPage((prev) => Math.min(prev + 1, desktopTotalPages))}
            disabled={desktopCurrentPage === desktopTotalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              desktopCurrentPage === desktopTotalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#3ccbc6] text-white hover:bg-[#2bb8b3]'
            }`}
            aria-label="Next page"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Mobile view with pagination */}
      <div className="md:hidden max-w-xl mx-auto space-y-8">
        {mobileCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-md mr-2 ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#3ccbc6] text-white hover:bg-[#2bb8b3]'
            }`}
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#3ccbc6] text-white hover:bg-[#2bb8b3]'
            }`}
            aria-label="Next page"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course1;
