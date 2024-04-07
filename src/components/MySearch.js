// SearchBar.js

import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    const query = useRef(null)
    const searchChannels = () => {

    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." ref={query} />
            <FontAwesomeIcon className='searchIcon' icon={faSearch} onClick={searchChannels} />
        </div>
    );
};

export default SearchBar;
