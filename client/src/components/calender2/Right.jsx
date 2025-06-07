import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Right = () => {
    const [date, setDate] = useState(new Date(2021, 8, 12));
    const timeSlots = [2, 3, 4, 5, 6];
    const formatDate = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return `${months[date.getMonth()]} ${date.getDate()}, ${days[date.getDay()]}`;
    };
    return (
        <div className="w-full bg-blue-50 h-full overflow-auto ">
            <div className="bg-white p-4 md:p-7 m-3 md:m-7 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Share and refer</h1>
                <p className="text-gray-500 mb-6 text-sm">Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLoremLorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem</p> 
                <div className="flex flex-col lg:flex-row gap-6 mt-8">

                    <div className="w-full lg:w-1/2">
                        <Calendar
                            onChange={setDate}
                            value={date}
                            className="rounded-lg shadow-sm border-0 w-full custom-calendar"
                            formatShortWeekday={() => ''}
                            tileClassName="text-center"
                        />
                        <style jsx global>{`
                            .react-calendar__month-view__weekdays {
                                display: none;
                            }
                            .custom-calendar {
                                border: none !important;
                                width: 100% !important;
                                padding: 16px !important;
                            }
                            .react-calendar__tile {
                                padding: 1.2em 0.5em !important;
                                font-size: 1.1em !important;
                            }
                            .react-calendar__navigation button {
                                font-size: 1.2em !important;
                                padding: 10px !important;
                            }
                            .react-calendar {
                                border: none !important;
                                box-shadow: none !important;
                            }
                            @media (max-width: 768px) {
                                .react-calendar__tile {
                                    padding: 0.8em 0.4em !important;
                                    font-size: 1em !important;
                                }
                                .react-calendar__navigation button {
                                    font-size: 1em !important;
                                    padding: 8px !important;
                                }
                                .custom-calendar {
                                    padding: 8px !important;
                                }
                            }
                            @media (max-width: 640px) {
                                .react-calendar__tile {
                                    padding: 0.6em 0.3em !important;
                                }
                            }
                        `}</style>
                    </div>


                    <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 shadow-sm mt-4 lg:mt-0">
                        <h2 className="text-lg font-semibold mb-4">{formatDate(date)}</h2>
                        <div className="space-y-4">
                            {timeSlots.map((hour) => (
                                <div key={hour} className="flex items-start">
                                    <div className="w-12 sm:w-16 text-gray-500 text-xs sm:text-sm mt-1">{hour} PM</div>
                                    <div className="flex-1 min-h-[40px] border-t border-gray-200 relative">
                                        {hour === 3 && (
                                            <div className="absolute top-0 left-0 right-0 bg-red-200 rounded p-2 text-xs sm:text-sm">
                                                Adobe XD Live Class
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right;