import React from 'react';
import Styles from './about.module.css'

const About = ({color, bg}) => {
    return (
        <main id='about' className={Styles.container} style={{background: bg}}>
            <div>
                <iframe id='video' className={Styles.video} src="https://www.youtube.com/embed/R4jLhwDHhpo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <section className={Styles.wrapper}>
                <h1 style={{color}} className={Styles.header}>About Muraadso</h1>
                <p style={{color}} className={Styles.content}>
                    Shirkada Muraadso <a href="muraadso.com">muraadso.com</a> waa shirkad online ah taas oo macaamiisheeda
                    u hirgalisay inay ka soo dalban karaan meelkasta oo ay ku sugan
                    yihiin, isla markaana u fududaysay in fahmi karaan
                    alaabta ay iibsanayaan.</p>
            </section>
        </main>
    );
};

export default About;
