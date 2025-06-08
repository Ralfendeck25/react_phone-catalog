import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome_message')}</h1>
      {/* Removemos os botões de mudança de idioma aqui pois já temos o LanguageSwitcher */}
    </div>
  );
}

export default MyComponent;
