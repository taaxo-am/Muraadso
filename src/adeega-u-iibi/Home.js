import React from 'react';
import Footer from "../components/footer/Footer";
import Main from "../adeega-u-iibi/main/Main";
import About from "./about/About";
import WhyUs from "../components/whyus/WhyUs";
import Testimonial from "./testimonial/Testimonial";
import Desc from "./desc/Desc";

const UIibi = () => {
    return (
        <>
            <Main />
            <About color='#4E4E4E' bg='F5F5F5'/>
            <Testimonial />
            <Desc />
            <WhyUs/>
            <Footer />
        </>
    );
};

export default UIibi;
