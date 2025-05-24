import { FaEye } from 'react-icons/fa';
import girl from '../../assets/girl.png';
import blogImage from '../../assets/Group 22.png';

const BlogCard = () => {
  return (
    
    <div className="bg-[#F5F7FF] rounded-2xl p-4 max-w-md mx-auto shadow-md ">
      <img
        src={blogImage}
        alt="Blog Cover"
        className="rounded-xl w-full h-60 object-cover"
      />

      <h2 className="text-lg md:text-xl font-semibold text-[#0f172a] mt-4">
        Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
      </h2>

      <div className="flex items-center gap-2 mt-4">
        <img
          src={girl}
          alt="Author"
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="font-semibold text-[#0f172a]">Lina</p>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        Class, launched less than a year ago by Blackboard co-founder Michael Chasen,
        integrates exclusively...
      </p>

      <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-[#3b82f6] hover:underline text-sm font-medium">
          Read more
        </a>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye className="text-sm" />
          <span className="text-sm">251,232</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
