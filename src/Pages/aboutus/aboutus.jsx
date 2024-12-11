import React from "react";
// import Bmi from "../../Components/Bmi/bmi"
import './aboutus.css';
import About from "./_components/about"
import Teamprofiles from "./_components/teamprofiles"
import Profile from "./_components/profile"
import Footer from "../../Components/Footer/Footer";
import Certificate from "./_components/certificate";

const AboutUs = () => {
    return ( 
        <div>
            <About />
            <Profile />
            <Teamprofiles />
            <Certificate />
            <Footer />
        </div>
    )
}

export default AboutUs;