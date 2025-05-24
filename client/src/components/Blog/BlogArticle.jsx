import React, { useState } from 'react';
import { FaThLarge, FaRegClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import article2 from "../../assets/article2.png";
import article4 from "../../assets/laptop.png";
import article3 from "../../assets/article2.png";
import article1 from "../../assets/article1.png";
import authorImg from "../../assets/girl.png"

const BlogArticle = () => {
  
  const articles = [
    {
      id: 1,
      image: article2,
      category: "Design",
      duration: "3 Month",
      title: "AWS Certified solutions Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      author: "Lina",
      authorImage: authorImg,
      originalPrice: 100,
      discountedPrice: 90
    },
    {
      id: 2,
      image: article1,
      category: "Design",
      duration: "4 Month",
      title: "AWS Certified solutions Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      author: "Lina",
      authorImage: authorImg,
      originalPrice: 100,
      discountedPrice: 80
    },
    {
      id: 3,
      image: article4,
      category: "Design",
      duration: "5 Month",
      title: "AWS Certified solutions Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      author: "Lina",
      authorImage: authorImg,
      originalPrice: 100,
      discountedPrice: 90
    },
    {
      id: 4,
      image: article3,
      category: "Design",
      duration: "3 Month",
      title: "AWS Certified solutions Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      author: "Lina",
      authorImage: authorImg,
      originalPrice: 100,
      discountedPrice: 80
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 1; 
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  
  const prevPage = () => {
    console.log('Previous clicked, current page:', currentPage);
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      console.log('Moving to page:', currentPage - 1);
    }
  };
  
  const nextPage = () => {
    console.log('Next clicked, current page:', currentPage);
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      console.log('Moving to page:', currentPage + 1);
    }
  };
 
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const mobileArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Marketing Articles</h2>
        <a href="#" className="text-[#3ccbc6] font-medium">See all</a>
      </div>
      <div className="hidden md:flex flex-nowrap gap-6 overflow-x-auto pb-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-2xl shadow-md p-5 min-w-[270px] max-w-[280px] flex-shrink-0">
            <img
              src={article.image}
              alt="AWS Course"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
              <div className="flex items-center gap-1">
                <FaThLarge className="text-gray-400" />
                <span>{article.category}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaRegClock className="text-gray-400" />
                <span>{article.duration}</span>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-900 mb-2">
              {article.title}
            </h3>

            <p className="text-xs text-gray-500 mb-4">
              {article.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={article.authorImage}
                  alt="Author"
                  className="w-7 h-7 rounded-full"
                />
                <span className="text-xs font-medium text-gray-800">{article.author}</span>
              </div>

              <div className="text-right">
                <span className="text-xs text-gray-400 line-through mr-1">${article.originalPrice}</span>
                <span className="text-base font-semibold text-[#3ccbc6]">${article.discountedPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        {mobileArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-2xl shadow-md p-5 w-full mb-4">
            <img
              src={article.image}
              alt="AWS Course"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
              <div className="flex items-center gap-1">
                <FaThLarge className="text-gray-400" />
                <span>{article.category}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaRegClock className="text-gray-400" />
                <span>{article.duration}</span>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-900 mb-2">
              {article.title}
            </h3>

            <p className="text-xs text-gray-500 mb-4">
              {article.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={article.authorImage}
                  alt="Author"
                  className="w-7 h-7 rounded-full"
                />
                <span className="text-xs font-medium text-gray-800">{article.author}</span>
              </div>

              <div className="text-right">
                <span className="text-xs text-gray-400 line-through mr-1">${article.originalPrice}</span>
                <span className="text-base font-semibold text-[#3ccbc6]">${article.discountedPrice}</span>
              </div>
            </div>
          </div>
        ))}
        

        <div className="flex justify-center items-center mt-6">
          <button
            type="button"
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-md mr-2 ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#3ccbc6] text-white hover:bg-[#2bb8b3] transition-colors'
            }`}
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </button>

         

          <button
            type="button"
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#3ccbc6] text-white hover:bg-[#2bb8b3] transition-colors'
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

export default BlogArticle;
