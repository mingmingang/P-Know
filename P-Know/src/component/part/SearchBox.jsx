import React, { useState } from 'react';
import '../../css/SearchBox.css'; // Import a separate CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <div className="search-box">
      <input
        type="text"
        placeholder="Cari Kelompok Keahlian"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <span className="search-icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#065693' }}/>
      </span>
    </div>
    </div>
    
  );
};

export default SearchBox;
