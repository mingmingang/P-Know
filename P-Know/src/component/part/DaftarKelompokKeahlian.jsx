import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons';
import '../../css/pic_pknow.css';

const DaftarKelompokKeahlian = ({
    imageSrc,
    title,
    prodi,
    pic,
    description,
    publicationStatus,
    statusIcon
}) => {
    return (
        <div className="daftar-kelompok-keahlian">
            <div className="bg-white-kk">
                <img 
                    alt={`${title} image`}
                    className="cover-daftar-kk"
                    height="200"
                    src={imageSrc}
                    width="300"
                />
                <h3 className="mt-4 text-xl font-bold text-blue-600">
                    {title}
                </h3>
                <div className="pemilik">
                    <div className="prodi">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <p className="text-gray-700">
                            {prodi}
                        </p>
                    </div>
                    <div className="userProdi">
                        <FontAwesomeIcon icon={faUser} />
                        <p className="text-gray-700">
                            PIC: {pic}
                        </p>
                    </div>
                </div>
                <p className="deskripsi">
                    {description}
                </p>
                <div className="status-open">
                    <table>
                        <tbody>
                            <tr>
                                <td><img src={statusIcon} alt="status icon" /></td>
                                <td><p>{publicationStatus}</p></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
                        Buka Modul
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DaftarKelompokKeahlian;
