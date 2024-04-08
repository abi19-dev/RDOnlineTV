// LanguageContext.js
import React, { createContext, useContext, useState } from 'react';

const languages = {
    en: {
        home: 'Home',
        channels: 'Channels',
        offers: 'Offers',
        freeTrial: '24h free trial',
        oneMonth: 'One month',
        sixMonths: 'Six months',
        twelveMonths: 'Twelve months',
        placeHolder: 'Search for TV shows or TV channels...',
        offerText: 'If you want to order some of our packages, you can contact us via:'
        // Add more translations for each language
    },
    exyu: {
        home: 'Početna',
        channels: 'Kanali',
        offers: 'Ponude',
        freeTrial: '24h probni period',
        oneMonth: 'Jedan mjesec',
        sixMonths: 'Šest mjeseci',
        twelveMonths: 'Dvanaest mjeseci',
        placeHolder: 'Pretraži TV kanale ili serije...',
        offerText: 'Ukoliko ste zainteresovani za neki od paketa, možete nam se javiti putem:',
        // Add more translations for each language
    },
    // Add translations for other languages
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('en'); // Default to English

    const translate = (key) => {
        return languages[currentLanguage][key] || key; // Return the translation or the key itself if not found
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => useContext(LanguageContext);
