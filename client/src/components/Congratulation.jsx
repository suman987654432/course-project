import email from '../assets/email.png'; 

const Congratulation = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#FFFFFFCC] p-4 rounded-2xl w-[300px] shadow-md">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-[#F88C3D] flex items-center justify-center">
            <img src={email} alt="Email" className="w-6 h-6" />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Congratulations</h2>
          <p className="text-sm text-gray-600">Your Admission Completed</p>
        </div>
      </div>
     
    </div>
  );
};

export default Congratulation;
