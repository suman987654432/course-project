import React, { useState, useEffect } from 'react';
import { FaThLarge, FaRegClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import article2 from "../../assets/article2.png";
import article4 from "../../assets/laptop.png";
import article3 from "../../assets/article2.png";
import article1 from "../../assets/article1.png";
import authorImg from "../../assets/girl.png"

const Course7 = () => {
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
      discountedPrice: 180
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
      discountedPrice: 290
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
      discountedPrice: 480
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
  
    handleResize();
    

    window.addEventListener('resize', handleResize);
    
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="w-full px-4 mt-16 mb-16 bg-[#F5F7FF] py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-semibold ml-0 sm:ml-2 md:ml-4 lg:ml-6">Student are viewing</h2>
          <a href="#" className="text-[#3ccbc6] font-medium text-sm sm:text-base mr-0 sm:mr-2 md:mr-4 lg:mr-6">See all</a>
        </div>

        <div className="hidden md:block">
          <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-6 justify-center pb-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl shadow-md p-4 sm:p-5 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] lg:min-w-[270px] lg:max-w-[280px] flex-shrink-0 mb-4 md:mb-0">
                <img src={article.image} alt="AWS Course" className="w-full h-40 object-cover rounded-xl mb-4" />
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
                <h3 className="text-base font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={article.authorImage} alt="Author" className="w-7 h-7 rounded-full" />
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
        </div>

       
        <div className="md:hidden">
          {currentArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl shadow-md p-4 sm:p-5 w-full mb-4">
              <img src={article.image} alt="AWS Course" className="w-full h-40 object-cover rounded-xl mb-4" />
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
              <h3 className="text-base font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-xs text-gray-500 mb-4">{article.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={article.authorImage} alt="Author" className="w-7 h-7 rounded-full" />
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
    </div>
  );
};

export default Course7;
