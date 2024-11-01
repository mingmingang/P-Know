import logo from "../../../assets/logoAstratech.png";
import dropdown from "../../../assets/dropdown.png";
import fotoBudi from "../../../assets/fotobudi.png";
export default function navbar_picpknow(){
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
                        <li><a href="" onClick={kelola_kk}>Kelola Kelompok Keahlian</a></li>
                        <li><a href="#">Kelola Anggota</a></li>
                        <li><a href="#">Daftar Pustaka</a></li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <a href="#">
                        I-Learning 
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

    )
}