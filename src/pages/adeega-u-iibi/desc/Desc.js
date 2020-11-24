import React from 'react';
import Styles from './styles.module.css'

const Desc = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.containerBG}/>
            <h1>Shirkada Muraadso</h1>
            <p>Shirkada Muraadso <a href="muraadso.com">muraadso.com</a> waa shirkad online ah taas oo macaamiisheeda
                u hirgalisay inay ka soo dalban karaan meelkasta oo ay ku sugan
                yihiin, isla markaana u fududaysay in fahmi karaan
                alaabta ay iibsanayaan.</p>
            {/*<img src={Img} alt=""/>*/}
        </div>
    );
};

export default Desc;
