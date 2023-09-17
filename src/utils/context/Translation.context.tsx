import React, { createContext, useContext, useState, ReactNode } from 'react';
import enjson from '@/utils/locals/en.json'
import mnjson from '@/utils/locals/mn.json'

// Define a context for translations
interface TranslationContextType {
  translations: Record<string, string>;
  changeLanguage: (newLanguage: string) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Custom hook to use translation context
export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  // Default language
  const [language, setLanguage] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, string>>(
    language == 'en' ? enjson : mnjson
  );

  //   // Function to change the language
  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    setTranslations(newLanguage === 'en' ? enjson : mnjson)
  };

  return (
    <TranslationContext.Provider value={{ translations, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}