import React from 'react';
import Styles from './footer.module.css'

const Footer = ({bg}) => {
    return (
        <footer id='footer' style={{background: bg ? bg : 'red'}} className={Styles.footer}>
            <div className={Styles.content}>
                <div className={Styles.copyright}>
                    <p>Copyright &copy; 2020 - All rights reserved</p>
                </div>
                <div className={Styles.icons}>
                    <i className='fab fa-youtube'/>
                    <i className='fab fa-instagram'/>
                    <i className='fab fa-tiktok'/>
                    <i className='fab fa-facebook'/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
