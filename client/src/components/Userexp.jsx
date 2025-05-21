import profile from '../assets/Ellipse.png'; 

const Userexp = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-[#FFFFFFCC] p-4 rounded-2xl w-[300px] shadow-md">
      <div className="flex items-center gap-4 w-full">
        <div className="relative">
          <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">User Experience Class</h2>
          <p className="text-sm text-gray-600">Today at 12.00 PM</p>
        </div>
      </div>
      <button className="mt-4 bg-[#d64575] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#c43e6a] transition-all">
        Join Now
      </button>
    </div>
  );
};

export default Userexp;
