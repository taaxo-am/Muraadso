import React from 'react';
import './contact.css'
import Logo from "./circular-logo.png";
import Background from "./background.jpg";
import {Formik} from "formik";

const initialValues = {
    name: '',
    
    message: ''
}

const Contact = () => {

    const formik = React.createRef()

    return (
        <>
            <img className='background' src={Background} alt=""/>
            <div className="container">
                <img src={Logo} alt=""/>
                <div className="form-group">
                    <div className="form-content">
                        <div>
                            <div className="title">
                                <span>CONTACT</span>
                                <span>US</span>
                            </div>
                            <div>
                                <i className='fab fa-facebook' />
                                <i className='fab fa-youtube' />
                                <i className='fab fa-instagram' />
                            </div>
                        </div>
                        <div>
                            <Formik>
                                <form className="form">
                                    <div className="form-items">
                                        <input className="input-control" placeholder="NAME"/>
                                    </div>
                                    <div className="form-items">
                                        <input className="input-control" placeholder="EMAIL"/>
                                    </div>
                                    <div className="form-items">
                                        <input className="input-control" placeholder="CONTACT NO"/>
                                    </div>
                                    <div className="form-items message">
                                        <textarea className="input-control" placeholder="MESSAGE"/>
                                    </div>
                                    <div className="form-items buttons">
                                        <button className="submit-btn">CANCEL</button>
                                        <button className="submit-btn">SEND</button>
                                    </div>
                                </form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
