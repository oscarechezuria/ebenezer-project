import AboutUs from "./contents/AboutUs";
import CarruselWrapper from "./contents/CarruselWrapper"
import Footer from "./contents/Footer";
import FormWrapper from "./contents/FormWrapper";
import Testimonios from "./contents/Testimonios";



export default function Content() {
    return (
        <div className="relative">
            <AboutUs/>
            <CarruselWrapper/>
            <FormWrapper/>
            <Testimonios/>
            <Footer/>
        </div>
)
}
