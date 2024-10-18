import React, { useState } from 'react';
import '../../css/roleModal.css'; // Import the CSS file for styling

export default function RoleModal({ isOpen, onClose }) {
    const [selectedRole, setSelectedRole] = useState('Prodi');

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Pilih Peran</h3>
                <div className="role-option">
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="Prodi"
                            checked={selectedRole === 'Prodi'}
                            onChange={() => setSelectedRole('Prodi')}
                        />
                        Masuk sebagai Prodi
                    </label>
                </div>
                <div className="role-option">
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="Tenaga Pendidikan"
                            checked={selectedRole === 'Tenaga Pendidikan'}
                            onChange={() => setSelectedRole('Tenaga Pendidikan')}
                        />
                        Masuk sebagai Tenaga Pendidikan
                    </label>
                </div>
                <button className="modal-button" onClick={onClose}>Oke</button>
            </div>
        </div>
    );
}
