import React from 'react';
import Navbar from "../../../components/navbar/Navbar";
import Logo from '../../../components/logo-2.png'
import Styles from "./main.module.css";
import Person from "./person.png";

const Main = () => {
    return (
        <main className={Styles.container}>
            <Navbar logo={Logo} onClick={(id) => {
                const anchor = document.querySelector(`#${id}`)
                anchor.scrollIntoView({behavior: 'smooth', block: 'start'})
            }}/>
            <div className={Styles.person}>
                <img src={Person}/>
            </div>
            <div className={Styles.center}>
                <h1>ADEEGA<br/>U IIBINTA</h1>
                <p>Ku iibi alaabadaada <br /> shirkada Muraadso<br /> gudeheeda.</p>
                <a href="#about"><h3 className={Styles.video}>Daawo Muuqaal <i className='fas fa-play'/> </h3></a>
            </div>
        </main>
    )
}

export default Main
