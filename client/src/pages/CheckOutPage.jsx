import Offers from '../components/checkout/Offers'
import Payment from '../components/checkout/Payment'
import CommonNavbar from '../components/commonNav/CommonNavbar'
import Footer from "../components/Footer"
const CheckOutPage = () => {
  return (
    <>
     <CommonNavbar/>
     <Payment/>
     <Offers/>
     <Footer/>
    
    </>
  )
}

export default CheckOutPage