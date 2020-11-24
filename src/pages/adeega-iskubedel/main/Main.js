import React from 'react';
import './main.module.css'
import Arrow from './arrow.png'
import Styles from './main.module.css'

const Main = () => {
    return (
        <section className={Styles.container}>
            <aside>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-tiktok'></i>
                <i className='fab fa-youtube'></i>
                <i className='fab fa-instagram'></i>
            </aside>
            <main className={Styles.hero}>
                <h3 className={Styles.title}>ADEEGA <br />ISKU BADAL-KA</h3>
                <p className={Styles.subtitle}>Iibi alaabtaada <br />oo ku bedelo alaab kale Muraadso gudeheeda.</p>
                <div className={Styles.waxKaOgow}>
                    <p >Wax ka ogow</p>
                    <div>
                        <img className={Styles.arrow} src={Arrow} alt=''/>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Main;
