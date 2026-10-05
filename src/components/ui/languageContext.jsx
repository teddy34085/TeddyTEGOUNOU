
import { createContext, useContext, useState } from "react";


import fr from "../../assets/service/fr"
import en from "../../assets/service/en"

const LanguageContext = createContext()

export function LanguageProvider({children}) {

    const [language, setLanguage] = useState("fr")

    const translations = language === "fr" ? fr : en

    return (
        <LanguageContext.Provider
        value={{ language, setLanguage, translations }}
        >
            {children}
        </LanguageContext.Provider>
    )
}


export function useLanguage() {
    return useContext(LanguageContext)
}