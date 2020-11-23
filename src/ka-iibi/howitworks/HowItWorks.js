import React from 'react';
import Styles from './howitworks.module.css'
import Image1 from './img1.png'
import Image2 from './img2.png'
import Image3 from './img3.png'

const HowItWorks = () => {
    return (
        <div id='how' className={Styles.container}>
            <div className={Styles.background} />
            <h1>Habka Adeegu U Shaqeeyo</h1>
            <div className={Styles.cardsContainer}>
                <div className={Styles.card}>
                    <img src={Image1} alt=""/>
                    <h1>Bring your product</h1>
                    <p>Lakaalay alaabta aad rabto in lagaa iibsado Muraadso.</p>
                </div>

                <i className='fa fa-arrow-right' />

                <div className={Styles.card}>
                    <img src={Image2} alt=""/>
                    <h1>Quality Check</h1>
                    <p>Qiimaynta lacageed ee alaabta aad rabto in lagaa iibsado.</p>
                </div>

                <i className='fa fa-arrow-right' />

                <div className={Styles.card}>
                    <img src={Image3} alt=""/>
                    <h1>Get Paid</h1>
                    <p>Ku hel lacagtaadii mudo 24 saac gudohood ah</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
