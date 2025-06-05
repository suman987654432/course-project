import React from 'react';
import { BsBook } from 'react-icons/bs';
import { IoArrowBack } from 'react-icons/io5';

const lessons = [
    ...Array(4).fill({
        title: 'Lesson 01 : Introduction about XD',
        duration: '30 mins'
    })
];

const quizzes = [
    ...Array(12).fill({
        title: 'Lesson 01 : Introduction about XD',
        duration: '30 mins'
    })
];

const LeftCom = () => {
    return (
        <div className="w-full h-full bg-white p-4 overflow-auto">
            
            <div className="mb-6 mt-1">
                <div className="w-10 h-10 bg-teal-500 rounded-md flex items-center justify-center text-white cursor-pointer hover:bg-teal-600 transition-colors">
                    <IoArrowBack />
                </div>
            </div>

            
            <div className="mb-8">
                <h2 className="font-semibold text-xl text-gray-800 mb-4 pl-1">Change Simplification</h2>

              
                <div className="flex items-center p-3 mb-3 rounded-lg bg-teal-100 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="mr-3 bg-white p-1.5 rounded-md shadow-sm">
                        <BsBook className="text-teal-500" size={18} />
                    </div>
                    <span className="text-sm font-medium">Lesson 01 : Introduction about XD</span>
                    <span className="ml-auto text-sm text-gray-600">30 mins</span>
                </div>

                
                <div className="flex items-center p-3 mb-3 rounded-lg bg-orange-100 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="mr-3 bg-white p-1.5 rounded-md shadow-sm">
                        <BsBook className="text-orange-500" size={18} />
                    </div>
                    <span className="text-sm font-medium">Lesson 01 : Introduction about XD</span>
                    <span className="ml-auto text-sm text-gray-600">30 mins</span>
                </div>

                
                <div className="flex items-center p-3 mb-3 rounded-lg bg-red-100 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="mr-3 bg-white p-1.5 rounded-md shadow-sm">
                        <BsBook className="text-red-500" size={18} />
                    </div>
                    <span className="text-sm font-medium">Lesson 01 : Introduction about XD</span>
                    <span className="ml-auto text-sm text-gray-600">30 mins</span>
                </div>

                
                <div className="flex items-center p-3 mb-3 rounded-lg bg-blue-100 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="mr-3 bg-white p-1.5 rounded-md shadow-sm">
                        <BsBook className="text-blue-500" size={18} />
                    </div>
                    <span className="text-sm font-medium">Lesson 01 : Introduction about XD</span>
                    <span className="ml-auto text-sm text-gray-600">30 mins</span>
                </div>
            </div>

            
            <div>
                <h2 className="font-semibold text-xl uppercase text-gray-800 mb-4 pl-1">Practice Quiz</h2>

                {quizzes.map((quiz, i) => {
                    
                    const bgColor =
                        i % 4 === 0 ? 'bg-teal-100' :
                            i % 4 === 1 ? 'bg-orange-100' :
                                i % 4 === 2 ? 'bg-red-100' :
                                    'bg-blue-100';

                    const iconColor =
                        i % 4 === 0 ? 'text-teal-500' :
                            i % 4 === 1 ? 'text-orange-500' :
                                i % 4 === 2 ? 'text-red-500' :
                                    'text-blue-500';

                    return (
                        <div key={i} className={`flex items-center p-3 mb-3 rounded-lg ${bgColor} hover:shadow-md transition-shadow cursor-pointer`}>
                            <div className="mr-3 bg-white p-1.5 rounded-md shadow-sm">
                                <BsBook className={iconColor} size={18} />
                            </div>
                            <span className="text-sm font-medium">{quiz.title}</span>
                            <span className="ml-auto text-sm text-gray-600">{quiz.duration}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LeftCom;