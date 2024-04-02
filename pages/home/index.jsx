import Section1 from "./components/Section1"
import Features from "./components/Features"
import BuildFoodTypes from "./components/BuildFoodTypes"
import Founder from "./components/Founder"
import Footer from "./components/Footer"
import Section2 from "./components/Section2"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
const Index = () =>{
    return(
        <div>
            <Navbar/>
            <Intro/>
            <Section1/>
            <Section2/>
            <Features/>
            <BuildFoodTypes/>
            <Founder/>
            <Footer/>
        </div>
    )
 }


 export default Index