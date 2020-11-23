import React, {useEffect, useState} from 'react';
import Img1 from './Rect.png'
import Img2 from './Ellipse 1.png'
import Sell from './sell.png'
import Person from './Capture.png'
import Styles from './styles.module.css'
import Navbar from "../components/navbar/Navbar";
import HowItWorks from "../ka-iibi/howitworks/HowItWorks";
import Slider from "react-slick";
import Logo from "../components/logo-2.png";

const Home = () => {

    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    })

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 900) {
                setSettings({...settings, slidesToShow: 1})
            } else {
                setSettings({...settings, slidesToShow: 2.5})
            }
        })
    }, [])

    return (
        <div className={Styles.container}>
            <div className={Styles.background} />
            <div className={Styles.main}>
                <div className={Styles.contentWrapper}>
                    <h1>ADEEGA<br/>Ka Iibsiga Macmiilka</h1>
                    <h4>Ka iibi Muraadso alaabadaada oo ku bedelo lacag.</h4>
                    <div className={Styles.btnWrapper}>
                        <a href='#video' className={Styles.btn}>Daawo Muuqaal</a>
                        <a href='#how' className={`${Styles.btn} ${Styles.btnOutline}`}>Ogow Xog Kale</a>
                    </div>
                </div>
            </div>
            <div id='about' className={Styles.about}>
                <img src={Sell} alt=""/>
                <div className={Styles.aboutContent}>
                    <h1>ABOUT KA IIBSIGA MACAAMIILKA</h1>
                    <p>Shirkada Muraadso <a href="muraadso.com">muraadso.com</a> waa shirkad online ah taas oo macaamiisheeda
                        u hirgalisay inay ka soo dalban karaan meelkasta oo ay ku sugan
                        yihiin, isla markaana u fududaysay in fahmi karaan
                        alaabta ay iibsanayaan.</p>
                </div>
            </div>

            <div className={Styles.infoContainer}>
                <iframe id='video' title='iframe' className={Styles.video} src="https://www.youtube.com/embed/R4jLhwDHhpo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                <div className={Styles.infoWrapper}>
                    <section>
                        <img src={Person} alt=""/>
                        <div>
                            <h3>Alex Parkinson</h3>
                            <h6>Managing Director, Savespace</h6>
                        </div>
                    </section>
                </div>
            </div>

            <div className={Styles.testimonialContainer}>
                <h2>What out customers say:</h2>
                <Slider className={Styles.carousel} {...settings}>
                    <div className={Styles.cardContainer}>
                        <div className={Styles.card}>
                            <img src={Img1} alt=""/>
                            <div className={Styles.cardContent}>
                                <img src={Img2} alt=""/>
                                <div>
                                    <h4>Jack Maison</h4>
                                    <h6>About Service</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.cardContainer}>
                        <div className={Styles.card}>
                            <img src={Img1} alt=""/>
                            <div className={Styles.cardContent}>
                                <img src={Img2} alt=""/>
                                <div>
                                    <h4>Jack Maison</h4>
                                    <h6>About Service</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.cardContainer}>
                        <div className={Styles.card}>
                            <img src={Img1} alt=""/>
                            <div className={Styles.cardContent}>
                                <img src={Img2} alt=""/>
                                <div>
                                    <h4>Jack Maison</h4>
                                    <h6>About Service</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.cardContainer}>
                        <div className={Styles.card}>
                            <img src={Img1} alt=""/>
                            <div className={Styles.cardContent}>
                                <img src={Img2} alt=""/>
                                <div>
                                    <h4>Jack Maison</h4>
                                    <h6>About Service</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <HowItWorks />

            <footer id='footer' className={Styles.footer}>
                <div className={Styles.content}>
                    <div className={Styles.copyright}>
                        <p>Copyright &copy; 2020 - All rights reserved</p>
                    </div>
                    <div className={Styles.icons}>
                        <i className='fab fa-instagram' />
                        <i className='fab fa-twitter' />
                        <i className='fab fa-facebook' />
                    </div>
                </div>
            </footer>

            <Navbar logo={Logo} color='white' onClick={(id) => {
                const anchor = document.querySelector(`#${id}`)
                anchor.scrollIntoView({behavior: 'smooth', block: 'start'})
            }}/>
        </div>
    );
};

export default Home;
