import React from 'react';
import Styles from './howitworks.module.css'
import Image1 from './img1.png'
import Image2 from './img2.png'
import Image3 from './img3.png'

const HowItWorks = () => {
    return (
        <div id='how' className={Styles.container}>
            <h1>Habka Adeegu U Shaqeeyo</h1>
            <div className={Styles.cardsContainer}>
                <div className={Styles.card}>
                    <div className={Styles.circle}>
                        <h1>1</h1>
                        <h1>Step</h1>
                    </div>
                    <h1>Bring your product</h1>
                    <h3>Lakaalay Alaabtaada.<br/>Shirkada Muraadso waxay kuu sahlaysaa inad alaabtada ku bedelan karto kuwo kale oola qiimo ah.</h3>
                    <img src={Image1} alt=""/>
                </div>

                <i className='fa fa-arrow-right' />

                <div className={Styles.card}>
                    <div className={Styles.circle}>
                        <h1>2</h1>
                        <h1>Step</h1>
                    </div>
                    <h1>Quality check</h1>
                    <h3>Qiimaynta Alaabta.<br/>Alaabadaada waa laguu qiimayn<br/> doonaa kadib waxaa laguugu bedeli doona kuwo la qiimo ah</h3>
                    <img src={Image2} alt=""/>
                </div>

                <i className='fa fa-arrow-right' />

                <div className={Styles.card}>
                    <div className={Styles.circle}>
                        <h1>3</h1>
                        <h1>Step</h1>
                    </div>
                    <h1>Get your exchange</h1>
                    <h3>Ugu dambayn waxad hel doontaa alaabtii laguugu badalay 24 saac gudohood.</h3>
                    <img src={Image3} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
