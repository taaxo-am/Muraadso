import React from 'react';
import Styles from './whyus.module.css'
import Image1 from './img1.png'
import Image2 from './img2.png'
import Image3 from './img3.png'

const WhyUs = () => {
    return (
        <div id='why' style={{color: '#4E4E4E'}} className={Styles.container}>
            <h2>Nagu Dooro</h2>
            <div className={Styles.cardsContainer}>
                <div className={Styles.card}>
                    <img src={Image1} alt=""/>
                    <h1>Goobkasta iyo Goorkasta</h1>
                    <p>Ka faa'idayso adeegan goobkastoo joogto iyo goorkasta.</p>
                </div>
                <div className={Styles.card}>
                    <img src={Image3} alt=""/>
                    <h1>Lakaalay<br/> Alaabtaada</h1>
                    <p>Lakaaly alaabadaada Muraadso si laguugu iibiyo</p>
                </div>
                <div className={Styles.card}>
                    <img src={Image2} alt=""/>
                    <h1>Ugu <br/>dambayn</h1>
                    <p>
                        Hel lacagtii alaabtaada laguugu iibiyay
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
