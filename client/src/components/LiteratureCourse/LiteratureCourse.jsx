import { useState } from 'react';
import book1 from '../../assets/book1.png';
import book2 from '../../assets/book2.png';
import book3 from '../../assets/book3.png';

const LiteratureCourse = () => {
  const [currentPage, setCurrentPage] = useState(3); 
  const books = [
    { id: 1, image: book1, title: "Build Your Dream Network" },
    { id: 2, image: book2, title: "Visible Learning for Literacy" },
    { id: 3, image: book3, title: "The New Rules of Work" },
    { id: 4, image: book1, title: "Pivot: The Only Move That Matters" },
    { id: 5, image: book2, title: "Learning & Development" },
    { id: 6, image: book3, title: "Visible Learning for Literacy" }
  ];

  const totalPages = 5;
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
   
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Literature course</h2>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="p-4">
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-full h-70 object-cover object-center rounded-md"
              />
              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-600">All Benefits of PLUS</div>
                <div className="text-xl text-teal-400 font-medium">$24</div>
              </div>
            </div>
          </div>
        ))}
      </div>

  
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button 
          onClick={handlePrevPage}
          className="h-8 w-8 rounded bg-teal-100 text-teal-600 flex items-center justify-center"
        >
          &lt;
        </button>
        
        {[1, 2, 3, 4, 5].map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`h-8 w-8 rounded flex items-center justify-center ${
              currentPage === page 
                ? 'bg-teal-400 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}
        
        <button 
          onClick={handleNextPage}
          className="h-8 w-8 rounded bg-teal-100 text-teal-600 flex items-center justify-center"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default LiteratureCourse;