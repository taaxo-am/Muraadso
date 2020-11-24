import React from 'react';
import Styles from './iskubedel.module.css'
import Image from './iskubedel.png'

const Iskubedel = () => {
    return (
        <main id='iskubedel' className={Styles.container}>
            <img src={Image} className={Styles.img} alt=""/>
            <section className={Styles.wrapper}>
                <h1 className={Styles.header}>ADEEGA ISKUBEDEL</h1>
                <p className={Styles.content}>Adeega Isku Bedel Waa Adeeg Kuu Sahlaya In Aad Aaabtada
                    Aad Ku Badalatid Alaab Kale Oo La Qiime Ah Ama Aad Ku
                    Darsatid Lacagta Ka Dhiman Alaabta Aad Rabtid
                    Inaad Ku Badaatid Waa Hadii Uu Kasoo Gudbo Tijaabada ,
                    Waaxyna Qaadanaysaa 24H In Uu Tijaabada Kaga Soo Gudbo </p>
            </section>
        </main>
    );
};

export default Iskubedel;
