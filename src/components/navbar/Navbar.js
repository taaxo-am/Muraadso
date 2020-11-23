import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Styles from './navbar.module.css'
import Logo from '../logo.png'

const Navbar = ({logo, color, background, onClick}) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className={Styles.wrapper} style={{background, color}}>
            <div>
                <Link to='/' >
                    <img className={Styles.logo} src={logo} style={logo !== Logo ? {marginLeft: '2rem'} : {}}/>
                </Link>
            </div>
            <ul className={`${Styles.navbar} ${!menuOpen && Styles.navbarHidden}`}>
                <li className={Styles.navItem}>
                    <Link className={`${Styles.navLink} ${Styles.active}`} to="/">Home</Link>
                </li>

                <li className={Styles.navItem}>
                    <Link style={{background, color}} className={Styles.navLink} to="/about" onClick={() => onClick('about')}>About</Link>
                </li>

                <li className={Styles.navItem}>
                    <Link style={{background, color}} className={Styles.navLink} to="/contact" onClick={() => onClick('footer')}>Contact us</Link>
                </li>
            </ul>
            <div className={Styles.menuIcon} onClick={handleClick}>
                <i style={{color}} className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </header>
    );
};

export default Navbar;
