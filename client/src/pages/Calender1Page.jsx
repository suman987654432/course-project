import LeftCom from "../components/calender1/LeftCom";
import RightCom from "../components/calender1/RightCom";
import { BsClock } from 'react-icons/bs';

const Calender1Page = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row">
                
                <div className="w-full sm:w-2/5 lg:w-1/4 h-auto sm:h-[100vh] border-r border-gray-100 overflow-auto">
                    <LeftCom />
                </div>

                <div className="w-full sm:w-3/5 lg:w-3/4 flex flex-col">
                    <div className="bg-teal-500 text-white py-5 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-sm">
                        <div>
                            <h1 className="text-xl md:text-2xl font-medium">Learn about Adobe XD & Prototyping</h1>
                            <p className="text-sm opacity-90 mt-1">Introduction about XD</p>
                        </div>
                        <div className="flex items-center bg-teal-600 bg-opacity-30 py-2 px-4 rounded-md mt-3 md:mt-0">
                            <BsClock className="mr-2" size={18} />
                            <span className="font-medium">1 hour</span>
                        </div>
                    </div>

                    <RightCom />
                </div>
            </div>
        </>
    )
}

export default Calender1Page;