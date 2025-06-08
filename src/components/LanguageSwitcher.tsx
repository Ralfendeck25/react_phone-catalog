import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', label: '🇬🇧 English' },
    { code: 'fr', label: '🇫🇷 Français' },
  ];

  return (
    <div style={{ margin: '1rem 0' }}>
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          style={{
            margin: '0 0.5rem',
            fontWeight: i18n.language === lang.code ? 'bold' : 'normal',
          }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
