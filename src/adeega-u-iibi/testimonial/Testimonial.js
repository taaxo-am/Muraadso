import React from 'react';
import Styles from './testimonial.module.css'
import Img from './img1.png'
import Img2 from './img2.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slider from "react-slick";


const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={Styles.base}>
        <Slider className={Styles.carousel} {...settings}>
            <div className={Styles.wrapper}>
                <h1 className={Styles.headline} style={{textAlign: 'center'}}>Our customer says</h1>
                <div className={Styles.card}>
                    <div className={Styles.info}>
                        <blockquote><i className='fa fa-quote-left'/> What
                            Our<br/>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;Customer Says
                        </blockquote>
                        <article>
                            <img src={Img} alt=""/>
                            <div>
                                <h4>Dav kolbar</h4>
                                <small>accessories</small>
                            </div>
                        </article>
                    </div>
                    <div className={Styles.imgContainer}>
                        <img src={Img2} alt=""/>
                    </div>
                    <strong className={`fa fa-angle-right`}/>
                </div>
            </div>
            <div className={Styles.wrapper}>
                <h1 style={{textAlign: 'center'}} className={Styles.headline} >Our customer says</h1>
                <div className={Styles.card}>
                    <div className={Styles.info}>
                        <blockquote><i className='fa fa-quote-left'/> What
                            Our<br/>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;Customer Says
                        </blockquote>
                        <article>
                            <img src={Img} alt=""/>
                            <div>
                                <h4>Dav kolbar</h4>
                                <small>accessories</small>
                            </div>
                        </article>
                    </div>
                    <div className={Styles.imgContainer}>
                        <img src={Img2} alt=""/>
                    </div>
                    <strong className={`fa fa-angle-right`}/>
                </div>
            </div>
            <div style={{textAlign: 'center'}} className={Styles.wrapper}>
                <h1 className={Styles.headline}>Our customer says</h1>
                <div className={Styles.card}>
                    <div className={Styles.info}>
                        <blockquote><i className='fa fa-quote-left'/> What
                            Our<br/>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;Customer Says
                        </blockquote>
                        <article>
                            <img src={Img} alt=""/>
                            <div>
                                <h4>Dav kolbar</h4>
                                <small>accessories</small>
                            </div>
                        </article>
                    </div>
                    <div className={Styles.imgContainer}>
                        <img src={Img2} alt=""/>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    );
};

export default Testimonial;
