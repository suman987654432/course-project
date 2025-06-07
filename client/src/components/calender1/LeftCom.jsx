import React from 'react';
import { BsBook } from 'react-icons/bs';
import { IoArrowBack } from 'react-icons/io5';

const quizzes = [
    ...Array(12).fill({
        title: 'Lesson 01 : Introduction about XD',
        duration: '30 mins'
    })
];

const LeftCom = () => {
    return (
        <div className="w-full h-full bg-white p-3 sm:p-4 overflow-auto">

            <div className="mb-4 sm:mb-6 mt-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-md flex items-center justify-center text-white cursor-pointer hover:bg-teal-600 transition-colors">
                    <IoArrowBack />
                </div>
            </div>


            <div className="mb-6 sm:mb-8">
                <h2 className="font-semibold text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4 pl-1">Change Simplification</h2>


                <div className="flex items-center p-2 sm:p-3 mb-2 sm:mb-3 rounded-lg bg-teal-100 hover:shadow-md transition-shadow cursor-pointer w-full min-w-0">
                    <div className="mr-3 bg-white p-1.5 rounded-md shadow-sm flex-shrink-0">
                        <BsBook className="text-teal-500" size={18} />
                    </div>
                    <span className="text-sm font-medium inline-block flex-grow">Lesson 01 : Introduction about XD</span>
                    <div className=" px-2 py-1 rounded-md ml-2">
                        <span className="text-sm text-gray-600 flex-shrink-0 whitespace-nowrap">30 mins</span>
                    </div>
                </div>


                <div className="flex items-center p-2 sm:p-3 mb-2 sm:mb-3 rounded-lg bg-orange-100 hover:shadow-md transition-shadow cursor-pointer w-full min-w-0">
                    <div className="mr-3 bg-white p-1.5 rounded-md shadow-sm flex-shrink-0">
                        <BsBook className="text-orange-500" size={18} />
                    </div>
                    <span className="text-sm font-medium inline-block flex-grow">Lesson 01 : Introduction about XD</span>
                    <div className=" px-2 py-1 rounded-md ml-2">
                        <span className="text-sm text-gray-600 flex-shrink-0 whitespace-nowrap">30 mins</span>
                    </div>
                </div>


                <div className="flex items-center p-2 sm:p-3 mb-2 sm:mb-3 rounded-lg bg-red-100 hover:shadow-md transition-shadow cursor-pointer w-full min-w-0">
                    <div className="mr-3 bg-white p-1.5 rounded-md shadow-sm flex-shrink-0">
                        <BsBook className="text-red-500" size={18} />
                    </div>
                    <span className="text-sm font-medium inline-block flex-grow">Lesson 01 : Introduction about XD</span>
                    <div className=" px-2 py-1 rounded-md ml-2">
                        <span className="text-sm text-gray-600 flex-shrink-0 whitespace-nowrap">30 mins</span>
                    </div>
                </div>


                <div className="flex items-center p-2 sm:p-3 mb-2 sm:mb-3 rounded-lg bg-blue-100 hover:shadow-md transition-shadow cursor-pointer w-full min-w-0">
                    <div className="mr-3 bg-white p-1.5 rounded-md shadow-sm flex-shrink-0">
                        <BsBook className="text-blue-500" size={18} />
                    </div>
                    <span className="text-sm font-medium inline-block flex-grow">Lesson 01 : Introduction about XD</span>
                    <div className=" px-2 py-1 rounded-md ml-2">
                        <span className="text-sm text-gray-600 flex-shrink-0 whitespace-nowrap">30 mins</span>
                    </div>
                </div>
            </div>


            <div>
                <h2 className="font-semibold text-lg sm:text-xl uppercase text-gray-800 mb-3 sm:mb-4 pl-1">Practice Quiz</h2>

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
                        <div key={i} className={`flex items-center p-2 sm:p-3 mb-2 sm:mb-3 rounded-lg ${bgColor} hover:shadow-md transition-shadow cursor-pointer w-full min-w-0`}>
                            <div className="mr-3 bg-white p-1.5 rounded-md shadow-sm flex-shrink-0">
                                <BsBook className={iconColor} size={18} />
                            </div>
                            <span className="text-sm font-medium inline-block flex-grow">{quiz.title}</span>
                            <div className=" px-2 py-1 rounded-md ml-2">
                                <span className="text-sm text-gray-600 flex-shrink-0 whitespace-nowrap">{quiz.duration}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LeftCom;