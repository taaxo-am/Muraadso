import React, {useEffect} from 'react';
import Background from './background1.png'
import Logo from './logo.png'
import CircularLogo from './circular-logo.png'
import PCS from './pcs.png'
import Person from './person.png'
import Styles from './styles.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slider from "react-slick";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slider = React.createRef()

    return (
        <div className={Styles.container}>
            <img className={Styles.background} src={Background} alt=""/>
            <div className={Styles.main}>
                <div className={Styles.contentWrapper}>
                    <h1>ADEEGA<br/>Dalabaadka Dibada</h1>
                    <h4>Ka dalbo Muraadso alaabada<br/> aad ka waydo dalka gudihiisa. </h4>
                    <div className={Styles.btnWrapper}>
                        <a href='#video' className='btn'>Daawo Muuqaal</a>
                        <a href='#how' className='btn btnOutline'>Ogow Xog Badan</a>
                    </div>
                </div>
            </div>
            <div id='about' className={Styles.about}>
                <div className={Styles.aboutContent}>
                    <h1>Waa Maxay Adeega <br/>Dalabaadka Dibadu? </h1>
                    <p>Adeegani waa adeeg kuu sahlaya in alaabta ad dalka gudihiisa ka waydo lagaaga doono dibada laguuguna keeno wakhti yaroo kooban gudeheed.  <br/> <br/>Adeegani waaxaa kuu haya shirkada Muraadso. </p>
                </div>

                <hr/>

                <div className={Styles.aboutContent}>
                    <h1>Shirkada <br/>Muraadso</h1>
                    <p>Shirkada Muraadso <a href="muraadso.com">muraadso.com</a> waa shirkad online ah taas oo macaamiisheeda
                        u hirgalisay inay ka soo dalban karaan meelkasta oo ay ku sugan
                        yihiin, isla markaana u fududaysay in fahmi karaan
                        alaabta ay iibsanayaan.</p>
                </div>
            </div>

            <div id='how' className={Styles.dalabaadContainer}>
                <div>
                    <h1>Adeegyada <br/>Muraadso Dalabaad </h1>
                    <h3>Dalabka qalabka electronicska ah sida
                        <ul>
                            <li>Mobiles & Accesories</li>
                            <li>Laptops, Computer</li>
                            <li>Cameras & Accesories</li>
                         </ul>
                    </h3>
                    <img src={PCS} alt=""/>
                </div>
            </div>

            <div className={Styles.testimonialContainer}>
                <div className={Styles.TestimonialBackground}></div>
                <i className='fa fa-arrow-left' onClick={() => {
                    slider.current.slickPrev()
                }}/>
                <Slider className={Styles.carousel} {...settings} ref={slider}>
                    <div className={Styles.card}>
                        <div className={Styles.cardContent}>
                            <p>I was amazed at the quality of Chamer. I'm good to<br/> go. Thank You!<br/>
                                I don't know what else to say.</p>
                            <img src={Person} alt=""/>
                            <h5>Alex Parkinson</h5>
                            <h6>Managing Director, Savespace</h6>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.cardContent}>
                            <p>I was amazed at the quality of Chamer. I'm good to<br/> go. Thank You!<br/>
                                I don't know what else to say.</p>
                            <img src={Person} alt=""/>
                            <h5>Alex Parkinson</h5>
                            <h6>Managing Director, Savespace</h6>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.cardContent}>
                            <p>I was amazed at the quality of Chamer. I'm good to<br/> go. Thank You!<br/>
                                I don't know what else to say.</p>
                            <img src={Person} alt=""/>
                            <h5>Alex Parkinson</h5>
                            <h6>Managing Director, Savespace</h6>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.cardContent}>
                            <p>I was amazed at the quality of Chamer. I'm good to<br/> go. Thank You!<br/>
                                I don't know what else to say.</p>
                            <img src={Person} alt=""/>
                            <h5>Alex Parkinson</h5>
                            <h6>Managing Director, Savespace</h6>
                        </div>
                    </div>
                </Slider>
                <i className={`fa fa-arrow-right ${Styles.leftArrow}`} onClick={() => {
                    slider.current.slickNext()
                }}/>
            </div>

            <div className={Styles.infoContainer}>
                <iframe id='video' title='iframe' className={Styles.video} src="https://www.youtube.com/embed/R4jLhwDHhpo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                <div className={Styles.infoWrapper}>
                    <h1>Wa maxay Adeega dalbo<br/>
                        ama Global Sevice ?</h1>
                    <section>
                        <p>By Youtube.com/Muraadso</p>
                        <img src={CircularLogo} alt=""/>
                    </section>
                </div>
                <i className='fa fa-arrow-alt-circle-up' onClick={() => {
                    window.scrollTo(0, 0)
                }}/>
            </div>

            <footer id='footer' className={Styles.footer}>
                <img src={Logo} alt=""/>
                <h1>0633333471</h1>
                <button style={{marginTop: ''}} className='btn'>CALL US NOW</button>
                <hr/>

                <h3>Nagala Soco</h3>

                <div>
                    <i className='fab fa-youtube'/>
                    <i className='fab fa-facebook'/>
                    <i className='fab fa-instagram'/>
                    <i className='fab fa-tiktok'/>
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
