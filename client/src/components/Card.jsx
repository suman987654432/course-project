const Card = ({ icon = null, title = "Card Title", description = "Card description", bgColor = "#5B72EE" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] p-7 text-center w-[300px] max-w-sm mx-auto relative">
      {/* Icon Container */}
      <div 
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full w-16 h-16 flex items-center justify-center shadow-md"
        style={{ backgroundColor: bgColor }}
      >
        <img src={icon} alt="icon" className="w-7 h-7" />
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold text-[#2E2E8F] mb-4">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;