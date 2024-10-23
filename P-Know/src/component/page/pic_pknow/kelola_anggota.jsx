import React from 'react';
import logo from "../../../assets/logoAstratech.png";
import dropdown from "../../../assets/dropdown.png";
import fotoBudi from "../../../assets/fotobudi.png";
import ceweVR from "../../../assets/ceweVR_beranda.png";
import cowoTop from "../../../assets/cowoTop_beranda.png";
import "../../../css/pic_pknow.css"; 
import Footer from "../../part/Footer";
import SearchBox from '../../part/SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'; 
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import aktif from '../../../assets/aktif.png';
import wait_pic from '../../../assets/wait-pic.png';
import filtericon from '../../../assets/filtericon.png';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

const KelolaAnggota = () => {
  return (
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
                                <li><FontAwesomeIcon icon={faArrowsRotate} /><a href="#">Kelola Kelompok Keahlian</a></li>
                                <li><a href="#">Kelola Anggota</a></li>
                                <li><a href="#">Daftar Pustaka</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="profile">
                        <div className="pengguna">
                            <h3>Budi Hartono</h3>
                            <h4>PIC P-KNOW</h4>
                            <p>Terakhir Masuk : 5 Maret 2024, 10.38 WIB</p>
                        </div>
                        <div className="fotoprofil">
                            <img src={fotoBudi} alt="Foto Budi" />
                        </div>
                    </div>
                </nav>
    
                <div className="header-search">
                    <h1 className='kelola-text'>Kelola Anggota</h1>
                    <p className='kelola-desk'>P-KNOW System dapat mengatur hak akses <br />anggota yang terdaftar di sistem KMS ASTRAtech.</p>
                   <SearchBox />
                </div>
                <div className="kelompok-keahlian">
                        <p className='title-kk'>Kelompok Keahlian</p>
                        <div className="left-feature">
                        <div className="status">
                            <table>
                                <tr>
                                    <td> <img src={aktif} alt="" /></td>
                                    <td> <p>Aktif/Sudah Publikasi</p></td>
                                </tr>
                                <tr>
                                    <td> <img src={wait_pic} alt="" /></td>
                                    <td> <p>Menunggu PIC dari Prodi</p></td>
                                </tr>
                            </table>
                        </div>
                        <div className="buttonadd_filter">
                            <button className='Filter'><img src={filtericon} alt="" />Filter</button>
                            <button className='Tambah'>+ Tambah</button>
                        </div>
                        </div>
                </div>

                    <div className="daftar-kelompok-keahlian">
                        <div class="bg-white-kk">
                        <img alt="Android Developer image"className='cover-daftar-kk' height="200" src="https://storage.googleapis.com/a1aa/image/9pX5u1jAxvKwBRmFzwijCnbEExNMvrVlQ9Ro9AxNpXEuLezJA.jpg" width="300"/>
                        <h3 class="mt-4 text-xl font-bold text-blue-600">
                        Android Developer
                        </h3>
                        <div className="pemilik">
                            <div className="prodi">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <p class="text-gray-700">
                                    Informatics Management
                                    </p>
                                    </div>
                                    <div className="userProdi">
                                    <FontAwesomeIcon icon={faUser} />
                                  <p class="text-gray-700">
                                    PIC: Kevin Trikusuma Dewa
                                    </p>
                                    </div>
                                
                                </div>
                        <p class="deskripsi">
                        Android developer create applications that can be used on smartphones or tablets, whether in the form of games or other forms of applications.
                        </p>
                        <div class="status-open">
                            <table>
                                <tr>
                                    <td> <img src={aktif} alt="" /></td>
                                    <td> <p>Aktif/Sudah Publikasi</p></td>
                                </tr>
                        </table>
                            <button class="bg-blue-600 text-white py-2 px-4 rounded-full">
                                Buka Modul
                            </button>
                        </div>
                    </div>

                    <div class="bg-white-kk">
                        <img alt="Android Developer image"className='cover-daftar-kk' height="200" src="https://storage.googleapis.com/a1aa/image/9pX5u1jAxvKwBRmFzwijCnbEExNMvrVlQ9Ro9AxNpXEuLezJA.jpg" width="300"/>
                        <h3 class="mt-4 text-xl font-bold text-blue-600">
                        Android Developer
                        </h3>
                        <div className="pemilik">
                            <div className="prodi">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <p class="text-gray-700">
                                    Informatics Management
                                    </p>
                                    </div>
                                    <div className="userProdi">
                                    <FontAwesomeIcon icon={faUser} />
                                  <p class="text-gray-700">
                                    PIC: Kevin Trikusuma Dewa
                                    </p>
                                    </div>
                                
                                </div>
                        <p class="deskripsi">
                        Android developer create applications that can be used on smartphones or tablets, whether in the form of games or other forms of applications.
                        </p>
                        <div class="status-open">
                            <table>
                                <tr>
                                    <td> <img src={aktif} alt="" /></td>
                                    <td> <p>Aktif/Sudah Publikasi</p></td>
                                </tr>
                        </table>
                            <button class="bg-blue-600 text-white py-2 px-4 rounded-full">
                                Buka Modul
                            </button>
                        </div>
                    </div>

                    <div class="bg-white-kk">
                        <img alt="Android Developer image"className='cover-daftar-kk' height="200" src="https://storage.googleapis.com/a1aa/image/9pX5u1jAxvKwBRmFzwijCnbEExNMvrVlQ9Ro9AxNpXEuLezJA.jpg" width="300"/>
                        <h3 class="mt-4 text-xl font-bold text-blue-600">
                        Android Developer
                        </h3>
                        <div className="pemilik">
                            <div className="prodi">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <p class="text-gray-700">
                                    Informatics Management
                                    </p>
                                    </div>
                                    <div className="userProdi">
                                    <FontAwesomeIcon icon={faUser} />
                                  <p class="text-gray-700">
                                    PIC: Kevin Trikusuma Dewa
                                    </p>
                                    </div>
                                
                                </div>
                        <p class="deskripsi">
                        Android developer create applications that can be used on smartphones or tablets, whether in the form of games or other forms of applications.
                        </p>
                        <div class="status-open">
                            <table>
                                <tr>
                                    <td> <img src={aktif} alt="" /></td>
                                    <td> <p>Aktif/Sudah Publikasi</p></td>
                                </tr>
                        </table>
                            <button class="bg-blue-600 text-white py-2 px-4 rounded-full">
                                Buka Modul
                            </button>
                        </div>
                    </div>
                    
                </div>
            <Footer/>
           
            </div>
  );
};

export default KelolaAnggota;