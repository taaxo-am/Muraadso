import React from 'react';
import Styles from './styles.module.css'
import Logo from './circular-logo.png'
import Footer from "../../components/footer/Footer";

const Return = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <img src={Logo} alt=""/>
                <h4>Return Policy</h4>
                <h5>How do I pay for a Muraadso purchase?</h5>
                <p>Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/ or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy. For all products, the returns/replacement policy provided on the product page shall prevail over the general returns policy. Do refer the respective item's applicable return/replacement policy on the product page for any exceptions to this returns policy and the table below</p>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Return;
