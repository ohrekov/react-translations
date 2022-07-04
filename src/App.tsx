import React from 'react';
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation();

  return (
    <>{t('Welcome to React')}</>
  )
}

export default App;
