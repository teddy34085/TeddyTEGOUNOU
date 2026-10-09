import { useLanguage } from "../languageContext"
import fr from "../../../service/fr";
import en from "../../../service/en";

import { motion } from "framer-motion";


const navbar = ["Accueil", "Propos", "Services", "Projets"]

export function Footer() {
    const { translations } = useLanguage();
    return (
        <footer
            className="
            relative 
            w-full h-full
            p-5 pb-10
            bg-sidebar
            border-t 
            flex justify-center items-center
            md:px-20  xl:px-50 2xl:px-80">
                <div
                    className="
                    alignServices 
                    w-full h-auto
                    flex flex-col gap-8
                    lg:flex-row lg:h-full ">
                      <h2 className="font-serif text-4xl lg:text-5xl 2xl:text-6xl"> Teddy <br/> TEGOUNOU </h2>
                      <hr className="lg:rotate-90 lg:z-999"/>
                      <div className="w-full h-auto flex flex-col gap-8 lg:justify-center">
                           <Navbar />
                           <p className="text-muted-foreground">Copyright © {new Date().getFullYear()} - Tous droits reserves</p>
                      </div>
                </div>
        </footer>
    )
}

function Navbar(){
    
    return (
       <nav>
            <ul 
            className="
            w-full h-auto 
            flex flex-col 
            gap-6 cursor-pointer
            lg:flex-row">
                    {navbar.map((section) => (
                        <li key={section} className="text-xl">
                            <a href={`#${section.toLowerCase()}`}>{section}</a>
                        </li>
                    ))}
            </ul>
       </nav>
 ) 
}