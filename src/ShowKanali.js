import React, { useState, useEffect, useRef } from 'react';
import podaci from '../src/podaciRDLiveKanali.txt';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from './components/LanguageContext';

function ShowKanali() {
    const [kanali, setKanali] = useState([]);
    const { translate } = useTranslation();
    const [filteredData, setFilteredData] = useState([]);
    const [userInput, setUserInput] = useState(""); // Dodajte stanje za praćenje unosa korisnika
    const query = useRef(null);

    const searchChannels = () => {

        const searchTerm = query.current.value.toLowerCase().trim();
        setUserInput(searchTerm); // Postavite korisnički unos u stanje

        // Provera dužine unosa
        if (searchTerm.length >= 3) {
            let list = [];
            for (const kanal of kanali) {
                if (kanal.toLowerCase().includes(searchTerm)) {
                    list.push(kanal);
                }
                else {
                    // Dodajte logiku ako je potrebno
                }
            }
            setFilteredData(list);
        } else {
            // Resetujemo filtrirane podatke ako uneseni pojam nije dovoljno dug
            setFilteredData([]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchChannels();
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
                <input type="text" placeholder={translate('placeHolder')} ref={query} onKeyPress={handleKeyPress} />
                <FontAwesomeIcon className='searchIcon' icon={faSearch} onClick={searchChannels} />
            </div>

            {userInput.length < 3 && userInput.length > 0 && ( // Prikazujemo poruku samo ako je korisnik uneo nešto i nema rezultata
                <h3 className='threeChar'>Enter at least 3 characters to search for channels</h3>
            )}

            {userInput.length > 3 && filteredData.length === 0 && ( // Prikazujemo poruku samo ako je korisnik uneo nešto i nema rezultata
                <h3 className='noRes'>No results</h3>
            )}

            {filteredData.length > 0 && ( // Prikazujemo rezultate samo ako ih ima
                <div className='contentColumn'>
                    {filteredData.map((kanal, index) => (
                        <div key={index} className='flagBox'>
                            <h3 className='flagBoxTxt'>{kanal}</h3>
                        </div>
                    ))}
                </div>
            )}
        </>


    );

}

export default ShowKanali;
