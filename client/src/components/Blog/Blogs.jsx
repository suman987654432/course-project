import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import blogImage from '../../assets/Group 22.png';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogs = [
    {
      id: 1,
      title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      author: "Lina",
      description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
      image: blogImage
    },
    {
      id: 2,
      title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      author: "Lina",
      description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
      image: blogImage
    },
    {
      id: 3,
      title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      author: "Lina",
      description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
      image: blogImage
    },
    {
      id: 4,
      title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      author: "Lina",
      description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
      image: blogImage
    }
  ];

  const blogsPerPage = 2;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="bg-[#F5F7FF] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-xl font-semibold text-[#0f172a]">Related Blog</h2>
          <a href="#" className="text-[#3ccbc6] hover:underline">See all</a>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}
          >
            {blogs.map(blog => (
              <div
                key={blog.id}
                className="w-full md:w-1/2 flex-shrink-0 px-3"
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-md mr-2 ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#3ccbc6] text-white hover:bg-[#2bb8b3] transition-colors'
            }`}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#3ccbc6] text-white hover:bg-[#2bb8b3] transition-colors'
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
