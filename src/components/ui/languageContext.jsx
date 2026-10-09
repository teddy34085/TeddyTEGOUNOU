
import { createContext, useContext, useState } from "react";


import fr from "../../service/fr"
import en from "../../service/en"

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