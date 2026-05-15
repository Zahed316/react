import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18n/i18n';
import { LanguageProvider } from './context/LanguageContext';
import { LearningProgressProvider } from './context/LearningProgressContext';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>
          <LearningProgressProvider>
            <App />
          </LearningProgressProvider>
        </LanguageProvider>
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>,
);