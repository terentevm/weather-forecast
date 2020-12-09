import React, { useContext } from 'react';

import { languageOptions } from '../Languages';

import { LanguageContext } from '../Providers/LanguageProvider';

import LanguageSelector from '../Components/LanguageSelector/LanguageSelector';

export default function LangSelector() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;

  const handleLanguageChange = (selectedLanguage) => {
    languageContext.setLanguage(selectedLanguage);
  };

  return (
    <LanguageSelector
      language={language}
      options={languageOptions}
      onChange={handleLanguageChange}/>
  );

}