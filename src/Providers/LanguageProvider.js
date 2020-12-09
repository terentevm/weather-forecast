import React, { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../Languages';

function getUserLanguage() {
  if (!window) {
    return languageOptions[0];
  }

  const userLang = localStorage.getItem('lang') || navigator.language.slice(0, 2);

  return languageOptions.find(item => item.id === userLang) || languageOptions[0];

}

function storeUserLang(selectedLanguage) {
  localStorage.setItem('lang', selectedLanguage.id);
}

function initContext() {
  const language = getUserLanguage();
  const dictionary = dictionaryList[language.id];

  return {language, dictionary};
}
// create the language context with default selected language
export const LanguageContext = createContext(initContext());

// it provides the language context to app
export function LanguageProvider({ children, onLangChange }) {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.language);
  const [dictionary, setDictionary] = useState(languageContext.dictionary);

  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage) => {
      storeUserLang(selectedLanguage);
      setLanguage(selectedLanguage);
      setDictionary(dictionaryList[selectedLanguage.id]);
      onLangChange(dictionaryList[selectedLanguage.id]);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      { children }
    </LanguageContext.Provider>
  );
}