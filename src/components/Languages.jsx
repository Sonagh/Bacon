import React, { useState } from 'react';

export const Languages = () => {
    const [activeLanguage, setActiveLanguage] = useState('հայ');

    const handleLanguageClick = (language) => {
        setActiveLanguage(language);
    };

    return (
        <div className="languages">
            <button
                className={activeLanguage === 'հայ' ? 'btn-language active' : 'btn-language'}
                onClick={() => handleLanguageClick('հայ')}
            >
                հայ
            </button>
            <button
                className={activeLanguage === 'eng' ? 'btn-language active' : 'btn-language'}
                onClick={() => handleLanguageClick('eng')}
            >
                eng
            </button>
            <button
                className={activeLanguage === 'рус' ? 'btn-language active' : 'btn-language'}
                onClick={() => handleLanguageClick('рус')}
            >
                рус
            </button>
        </div>
    );
};
