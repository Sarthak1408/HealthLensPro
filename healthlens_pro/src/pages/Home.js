import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Hero} from "../components/Hero";
import {Services} from "../components/Services";
import {Appointment} from "../components/Appointment";
import {Doctor} from "../components/Doctor";
import {About} from "../components/About";
import {Contact} from "../components/Contact";

export const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Services/>
            <Appointment/>
            <Doctor/>
            <About/>
            <Contact/>
            <Footer/>
        </>
    )
}