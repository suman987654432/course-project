import calander from '../assets/calendar 1.png'; 

const Assisted = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#FFFFFFCC] p-4 rounded-2xl w-[200px] shadow-md">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-[#23BDEE] flex items-center justify-center">
            <img src={calander} alt="Email" className="w-6 h-6" />
          </div>
          <span className="absolute bottom-0  rounded-full border-2 border-white"></span>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">250K</h2>
          <p className="text-sm text-gray-600">Assisted Student</p>
        </div>
      </div>
     
    </div>
  );
};

export default Assisted;
