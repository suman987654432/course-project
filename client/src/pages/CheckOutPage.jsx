import Offers from '../components/checkout/Offers'
import Payment from '../components/checkout/Payment'
import CommonNavbar from '../components/commonNav/CommonNavbar'
import Footer from "../components/Footer"
const CheckOutPage = () => {
  return (
    <>
     <CommonNavbar/>
     <div className="w-full max-w-[1920px] mx-auto overflow-x-hidden px-4 md:px-6 lg:px-8">
       <Payment/>
       <Offers/>
     </div>
     <Footer/>
    </>
  )
}

export default CheckOutPage