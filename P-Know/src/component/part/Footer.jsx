import React from 'react';
import logo from '../../assets/logoAstratech.png';
import "../../css/Footer.css"; // Pastikan path logo sesuai

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      <div className="footer-section">
        <img src={logo} alt="ASTRAtech"  width="150" />
      </div>
      <div className="footer-detail">
        <div className="footer-section">
          <h3>Alamat</h3>
          <p>
            Cikarang Campus: St. Gaharu Block F3 Delta Silicon II Cibatu, South Cikarang Bekasi
            Regency West Java 17530
          </p>
          <p>
            Sunter Campus: PT Astra International Tbk Complex Building B Floor 5 St. Gaya Motor
            Raya No. 8, Sunter II North Jakarta 14330
          </p>
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
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 - MIS ASTRAtech</p>
      </div>
    </footer>
  );
};

export default Footer;
