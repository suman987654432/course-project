import CommonNavbar from '../components/commonNav/CommonNavbar'
import SearchHolder from '../components/search/SearchHolder'
import Course6 from '../components/Course/Course6'
import Learning from '../components/search/Learning'
import Course3 from '../components/Course/Course3'
import Creators from '../components/search/Creators'
import Offers from '../components/checkout/Offers'
import Testimonal from '../components/search/Testimonal'
import Footer from "../components/Footer"

const SearchPage = () => {
  return (
    <>
    <CommonNavbar />
    <div className="w-full max-w-[1920px] mx-auto overflow-x-hidden px-4 md:px-6 lg:px-8">
      <SearchHolder/>
      <Course6 />
      <Course6 />
      <Learning/>
      <Course3/>
      <Creators/>
      <Testimonal/>
      <Offers/>
    </div>
    <Footer/>
    </>
  
  )
}

export default SearchPage