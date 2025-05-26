import CourseDetailPage from '../../pages/CourseDetailPage';
import { Link } from 'react-router-dom';

import { FaBriefcase, FaCode, FaDatabase, FaCamera, FaBookOpen, FaFilm, FaPencilRuler, FaBullhorn } from 'react-icons/fa';

const courses = [
  { title: 'Design', icon: <FaPencilRuler className="w-5 h-5 text-teal-600" />, bg: 'bg-teal-100', color: 'text-teal-800' },
  { title: 'Development', icon: <FaCode className="w-5 h-5 text-indigo-600" />, bg: 'bg-indigo-100', color: 'text-indigo-800' },
  { title: 'Database', icon: <FaDatabase className="w-5 h-5 text-blue-600" />, bg: 'bg-blue-100', color: 'text-blue-800' },
  { title: 'Business', icon: <FaBriefcase className="w-5 h-5 text-emerald-600" />, bg: 'bg-emerald-100', color: 'text-emerald-800' },
  { title: 'Marketing', icon: <FaBullhorn className="w-5 h-5 text-amber-600" />, bg: 'bg-amber-100', color: 'text-amber-800' },
  { title: 'Photography', icon: <FaCamera className="w-5 h-5 text-rose-600" />, bg: 'bg-rose-100', color: 'text-rose-800' },
  { title: 'Acting', icon: <FaFilm className="w-5 h-5 text-gray-600" />, bg: 'bg-gray-100', color: 'text-gray-800' },
  { title: 'Education', icon: <FaBookOpen className="w-5 h-5 text-purple-600" />, bg: 'bg-purple-100', color: 'text-purple-800' }
];

const Course2 = () => {
  
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Choose your favorite course from top categories
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 flex flex-col items-center text-center h-full transform hover:-translate-y-1 hover:border-gray-200 transition-all"
            >
              <div className={`w-12 h-12 flex items-center justify-center mb-4 ${course.bg}`}> 
                {course.icon}
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${course.color}`}>{course.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Explore our comprehensive {course.title.toLowerCase()} courses and learn from industry experts with hands-on projects and real-world examples.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 w-full">
                <Link 
                  to={`/course-detail/${course.title.toLowerCase()}`} 
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer inline-block"
                >
                  View courses →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course2;