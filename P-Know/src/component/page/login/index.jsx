import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import logo from "../../../assets/logoAstratech.png";
import logoPknow from "../../../assets/pknow.png";
import ceweVR from "../../../assets/ceweVR_beranda.png";
import cowoTop from "../../../assets/cowoTop_beranda.png";
import "../../../css/pic_pknow.css"; // Import CSS
import Footer from '../../part/Footer';

export default function Login() {
    return (
        <div>
            <div className="navbar">
                <nav>
                    <img 
                        src={logo}
                        className="logo" 
                        alt="Logo ASTRAtech" 
                        title="Logo ASTRAtech" 
                        width="170px" 
                        height="40px" 
                    />
                </nav>
            </div>

            <section className="secLogin">
                    <div className="login-container">
                    <div className="login-box">
                    <img 
                                src={logoPknow}
                                className="pknow" 
                                alt="Logo ASTRAtech" 
                                title="Logo ASTRAtech" 
                                width="290px" 
                                height="43px" 
                            />
                        <form className="login-form">
                            <input 
                                type="text" 
                                placeholder="Nama Pengguna" 
                                className="login-input"
                            />
                            <input 
                                type="password" 
                                placeholder="Kata Sandi" 
                                className="login-input"
                            />
                            <button type="submit" className="login-button">Masuk</button>
                        </form>
                    </div>
                </div>
        </section>
           <Footer />.

            </div>      
    );
}
