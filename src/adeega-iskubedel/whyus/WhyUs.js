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
                    <p>Noolakaalay alaabadaada si aan kuugu bedelno alaabo kale oo la qiimo ah.</p>
                </div>
                <div className={Styles.card}>
                    <img src={Image2} alt=""/>
                    <h1>Ku hel<br/> 24 saac</h1>
                    <p>
                        Ku hel alaabada laaguu bedelay 24 saac gudohood.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
