import React from 'react'
import { 
  FaTwitter, 
  FaFacebookF, 
  FaYoutube, 
  FaInstagram, 
  FaTelegram, 
  FaWhatsapp 
} from 'react-icons/fa'

const Card = ({ title, description, bgColor }) => {
  const contentBgColor = bgColor || 'bg-blue-50';
  
  return (
    <div className="card-container w-full mb-3 sm:mb-4 p-4 sm:p-5 bg-white rounded-lg shadow-sm">
      <div className="header flex flex-wrap justify-between items-center mb-2 sm:mb-3">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-0 w-full sm:w-auto">
          {title || "06 Super Coins on the way"}
        </h2>
        <div className="social-icons flex flex-wrap gap-1 sm:gap-0 sm:space-x-2 w-full sm:w-auto justify-start sm:justify-end">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-bg bg-teal-500 p-1 sm:p-1.5 rounded-full text-white cursor-pointer hover:bg-teal-600 text-xs mb-1 sm:mb-0"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-bg bg-teal-500 p-1 sm:p-1.5 rounded-full text-white cursor-pointer hover:bg-teal-600 text-xs mb-1 sm:mb-0"><FaFacebookF /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon-bg bg-teal-500 p-1 sm:p-1.5 rounded-full text-white cursor-pointer hover:bg-teal-600 text-xs mb-1 sm:mb-0"><FaYoutube /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-bg bg-teal-500 p-1 sm:p-1.5 rounded-full text-white cursor-pointer hover:bg-teal-600 text-xs mb-1 sm:mb-0"><FaInstagram /></a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="icon-bg bg-teal-500 p-1 sm:p-1.5 rounded-full text-white cursor-pointer hover:bg-teal-600 text-xs mb-1 sm:mb-0"><FaTelegram /></a>
          <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="icon-bg bg-teal-500 p-1 sm:p-1.5 rounded-full text-white cursor-pointer hover:bg-teal-600 text-xs mb-1 sm:mb-0"><FaWhatsapp /></a>
        </div>
      </div>
      
      <div className="content">
        <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adi</p>
        
        <div className={`content-box ${contentBgColor} p-3 sm:p-4 rounded-lg`}>
          <p className="text-gray-600 text-xs sm:text-sm">
            {description || "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card