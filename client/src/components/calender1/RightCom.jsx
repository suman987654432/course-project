import { IoIosArrowDown } from 'react-icons/io';

const RightCom = () => {
  return (
    <div className="w-full bg-blue-50 h-full overflow-auto">
      <div className="bg-white p-4 md:p-7 m-3 md:m-7 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Create new event</h1>
        <p className="text-gray-500 mb-6 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscina elit, sed do eiusmod</p>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Event Name</p>
            <input 
              type="text" 
              placeholder="Adobe XD Auto - Animate - Your Guide to Creating" 
              className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <p className="text-sm text-gray-600 mb-1">Start date / Time</p>
              <input 
                type="text" 
                defaultplaceholderValue="September 24, 2017 07:53 am" 
                className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-sm text-gray-600 mb-1">End Date / Time</p>
              <input 
                type="text" 
                placeholder="September 24, 2017 07:53 am" 
                className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-1">Location</p>
            <input 
              type="text" 
              placeholder="2118 Thornridge Cir. Syracuse, Connecticut 35624" 
              className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <p className="text-sm text-gray-600 mb-1">Notification</p>
              <div className="relative">
                <select className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all">
                  <option>30 mins</option>
                  <option>1 hour</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-400" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <input 
                type="email" 
                placeholder="jessica.hanson@example.com" 
                className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Event Description</p>
            <textarea
              className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              rows="4"
            ></textarea>
          </div>

          <div className="text-right">
            <button className="bg-teal-500 text-white py-2 px-8 rounded-md hover:bg-teal-600 hover:shadow-lg transition-all font-medium">
              Save Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCom;