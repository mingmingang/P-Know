import { useRef, useState } from "react";
import logo from "../../../assets/logoAstratech.png";
import dropdown from "../../../assets/dropdown.png";
import fotoBudi from "../../../assets/fotobudi.png";
import ceweVR from "../../../assets/ceweVR_beranda.png";
import cowoTop from "../../../assets/cowoTop_beranda.png";
import "../../../css/pic_pknow.css"; // Import CSS
import kelola_kk from "./kelola_kk";
import { Link } from 'react-router-dom';

export default function PIC_PKNOW() {
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
                    <ul>
                        <li><a href="#">Beranda</a></li>
                        <li className="dropdown-menu">
                            <a href="#">
                                Knowledge Database 
                                 <img className="dropdown" src={dropdown} alt="Dropdown" />
                            </a>
                            <ul className="dropdown-content">
                                <li><a href="" onClick={kelola_kk}>Kelola Kelompok Keahlian</a></li>
                                <li><a href="#">Kelola Anggota</a></li>
                                <li><a href="#">Daftar Pustaka</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="profile">
                        <div className="pengguna">
                            <h3>Budi Hartono</h3>
                            <h4>PIC KMS</h4>
                            <p>Terakhir Masuk : 5 Maret 2024, 10.38 WIB</p>
                        </div>
                        <div className="fotoprofil">
                            <img src={fotoBudi} alt="Foto Budi" />
                        </div>
                    </div>
                </nav>
            </div>

            <section className="sec1">
                <div className="ucapan">
                    <h3>Selamat Datang di</h3>
                    <h1>System Knowledge Management System</h1>
                    <p>“Sistem Manajemen Pengetahuan ini akan membantu Anda belajar lebih efisien. Mari kita mulai dengan menjelajahi fitur-fitur yang tersedia dengan mengakses menu yang disediakan.”</p>
                    <button>Knowledge Database</button>
                </div>

                <div className="imgDatang">
                    <img className="ceweVR" src={ceweVR} alt="Ilustrasi Cewek VR" />
                    <img className="cowoTop" src={cowoTop} alt="Ilustrasi Cowok" />
                </div>
            </section>

            <footer>
                <div className="footer-section">
                    <img src={logo} alt="ASTRAtech" width="150" />
                </div>
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Alamat</h3>
                        <p>Cikarang Campus: St. Gaharu Block F3 Delta Silicon II Cibatu, South Cikarang Bekasi Regency West Java 17530</p>
                        <p>Sunter Campus: PT Astra International Tbk Complex Building B Floor 5 St. Gaya Motor Raya No. 8, Sunter II North Jakarta 14330</p>
                    </div>
                    <div className="footer-section">
                        <h3>Kontak</h3>
                        <p>+62 21 5022 7222</p>
                        <p>+62 21 6519 555</p>
                        <p>+62 878 7177 6117 (WhatsApp)</p>
                        <p>sekretariat@polytechnic.astra.ac.id</p>
                    </div>
                    <div className="footer-section">
                        <h3>ASTRAtech</h3>
                        <ul>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Partner</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Program Studi</h3>
                        <ul>
                            <li><a href="#">Pembuatan Peralatan dan Perkakas Produksi</a></li>
                            <li><a href="#">Teknik Produksi dan Proses Manufaktur</a></li>
                            <li><a href="#">Manajemen Informatika</a></li>
                            <li><a href="#">Mesin Otomotif</a></li>
                            <li><a href="#">Mekatronika</a></li>
                            <li><a href="#">Teknologi Konstruksi Bangunan Gedung</a></li>
                            <li><a href="#">Teknologi Rekayasa Pemeliharaan Alat Berat</a></li>
                            <li><a href="#">Teknologi Rekayasa Logistik</a></li>
                            <li><a href="#">Teknologi Rekayasa Perangkat Lunak</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2024 - MIS ASTRAtech</p>
                </div>
            </footer>
        </div>
    );
}
