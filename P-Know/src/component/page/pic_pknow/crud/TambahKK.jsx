import React from 'react';
import logo from "../../../../assets/logoAstratech.png";
import dropdown from "../../../../assets/dropdown.png";
import fotoBudi from "../../../../assets/fotobudi.png";
import "../../../../css/pic_pknow.css"; 
import Footer from "../../../part/Footer";
import SearchBox from '../../../part/SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'; 
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import aktif from '../../../../assets/aktif.png';
import wait_pic from '../../../../assets/wait-pic.png';
import filtericon from '../../../../assets/filtericon.png';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import backIcon from '../../../../assets/backIcon.png';
import previewImgIcon from '../../../../assets/previewImgIcon.png';


export default function TambahKK() {
    return(
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
                            <h4>PIC KMS</h4>
                            <p>Terakhir Masuk : 5 Maret 2024, 10.38 WIB</p>
                        </div>
                        <div className="fotoprofil">
                            <img src={fotoBudi} alt="Foto Budi" />
                        </div>
                    </div>
                </nav>
                <div className="add-form">
                    <div className="add-title">
                        <div className="back-title">
                            <img src={backIcon} alt="" />
                            <h3>Tambah Kelompok Keahlian</h3>
                        </div>
                        <div className="ket-draft">
                            <label htmlFor="">Draft</label>
                        </div>
                    </div>

                    <div className="form-tambah">
                        <form action="">
                            <p>Gambar<span color='red'>*</span></p>
                            <div className="sec-up-image">
                                    <div className="preview-img">
                                        <img src={previewImgIcon} alt="" />
                                    </div>

                                    <div className="btn-up">
                                    <button>Unggah Gambar</button>
                                    <p>Maksimal ukuran gambar 5Mb.</p>
                                    </div>
                            </div>

                            <div className="sec-input">
                            <div className="sec-nama-kk">
                                <p>Nama Kelompok Keahlian<span color='red'>*</span></p>
                                <input type="text" placeholder='Masukan Nama Kelompok Keahlian' />
                            </div>
                            </div>

                            <div className="sec-input">
                            <div className="sec-desc-kk">
                                <p>Deskripsi/Ringkasan Mengenai Kelompok Keahlian<span color='red'>*</span></p>
                                <input type="text" className='deskripsi-kk' placeholder='Masukan Deskripsi Kelompok Keahlian'/>
                            </div>
                            </div>

                            <div className="sec-input">
                            <div className="prodi-kk-pic-kk">
                                <div className="select-kk">
                                <p>Program Studi<span color='red'>*</span></p>
                                <select name="" id="">
                                    <option value="">-- Pilih Program Studi Kelompok Keahlian --</option>
                                    <option value="">Pembuatan Peralatan dan Perkakas Produksi</option>
                                    <option value="">Teknik Produksi dan Proses Manufaktur</option>
                                    <option value="">Manajemen Informatika</option>
                                    <option value="">Mesin Otomotif</option>
                                    <option value="">Teknologi Rekayasa Pemeliharaan Alat Berat</option>
                                    <option value="">Mekatronika</option>
                                    <option value="">Teknologi Konstruksi Bangunan Gedung</option>
                                    <option value="">Teknologi Rekayasa Logistik</option>
                                    <option value="">Teknologi Rekayasa Perangkat Lunak</option>
                                </select>
                                </div>
                                <div className="select-pic-kk">
                                <p>Program Studi<span color='red'>*</span></p>
                                <select name="" id="">
                                    <option value="">-- Pilih PIC Kelompok Keahlian --</option>
                                <option value="">Riesta Pinky Nurul Arifah</option>
                                    <option value="">Kristina Hutajulu</option>
                                </select>
                                </div>
                            </div>
                            </div>

                            <div className="submit-cancel">
                                <button className='cancel'>Batalkan</button>
                                <button className='submit'>Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
                </div>

    );
}