import React, { useState, useEffect, useRef } from 'react';
import podaci from '../src/podaciRDLiveKanali.txt';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function ShowKanali() {
    const [kanali, setKanali] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const query = useRef(null);

    const searchChannels = () => {
        const searchTerm = query.current.value.toLowerCase().trim();

        // Provera dužine unosa
        if (searchTerm.length >= 3) {
            let list = [];
            for (const kanal of kanali) {
                if (kanal.toLowerCase().includes(searchTerm)) {
                    list.push(kanal);
                }
            }
            setFilteredData(list);
        } else {
            // Resetujemo filtrirane podatke ako uneseni pojam nije dovoljno dug
            setFilteredData([]);
        }
    };

    useEffect(() => {
        fetch(podaci)
            .then(response => response.text())
            .then(text => {
                const kanaliNazivi = text.split('\n').map(name => name.trim());
                setKanali(kanaliNazivi);
            })
            .catch(error => console.error('Error fetching data and parsing data:', error));
    }, []);

    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search for TV shows or TV channels..." ref={query} />
                <FontAwesomeIcon className='searchIcon' icon={faSearch} onClick={searchChannels} />
            </div>

            <div className='contentColumn'>
                {filteredData.map(kanal => <div className='flagBox'><h3 className='flagBoxTxt'>{kanal}</h3></div>)}
            </div>

        </>


    );

}

export default ShowKanali;