import React from 'react';
import Styles from './about.module.css'

const About = ({color, bg}) => {
    return (
        <main id='about' className={Styles.container} style={{background: bg}}>
            <div className={Styles.card}>
                <iframe id='video' className={Styles.video} src="https://www.youtube.com/embed/R4jLhwDHhpo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <section className={Styles.wrapper}>
                <h1 style={{color}} className={Styles.header}>ADEEGA U IIBINTA</h1>
                <p style={{color}} className={Styles.content}>
                    Adeega Isku Bedel Waa Adeeg Kuu Sahlaya In Aad Aaabtada
                    Aad Ku Badalatid Alaab Kale Oo La Qiime Ah Ama Aad Ku
                    Darsatid Lacagta Ka Dhiman Alaabta Aad Rabtid
                    Inaad Ku Badaatid Waa Hadii Uu Kasoo Gudbo Tijaabada ,
                    Waaxyna Qaadanaysaa 24H In Uu Tijaabada Kaga Soo Gudbo
                </p>
            </section>
        </main>
    );
};

export default About;
