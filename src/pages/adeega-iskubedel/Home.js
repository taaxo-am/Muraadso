import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Styles from "../../app.module.css";
import Person from "./main/person.png";
import Logo from "../../components/logo.png";
import Main from "./main/Main";
import About from "./about/About";
import Iskubedel from "./iskubedel/Iskubedel";
import Video from "./video/Video";
import WhyUs from "./whyus/WhyUs";
import HowItWorks from "./howitworks/HowItWorks";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar logo={Logo} color='red' onClick={(id) => {
                const anchor = document.querySelector(`#${id}`)
                anchor.scrollIntoView({behavior: 'smooth', block: 'start'})
            }}/>
            <div className={Styles.person}>
                <img src={Person}/>
            </div>
            <Main/>
            <Iskubedel id='iskubedel'/>
            <About id='about' bg='#B93A37'/>
            {/*<Video/>*/}
            <WhyUs id='why'/>
            <HowItWorks id='how'/>
            <Footer/>
        </>
    );
};

export default Home;
