
import { useLanguage } from "../languageContext";
import fr from "../../../assets/service/fr";
import en from "../../../assets/service/en";

import { useEffect, useState } from "react";
import { Sun, Moon, Globe } from "lucide-react";
import { Navigation } from "../section/navigation";
import { TextAnimate } from "@/components/ui/text-animate";

import { li } from "motion/react-client";

const navbar = ["Accueil", "Propos", "Services", "Projets"];

export function Header() {
  const [active, setActive] = useState(true);

  const navClick = () => {
    setActive(!active);
  };

  return (
    <>
      {active ? null : <Navigation />}

      <header
        className="
    fixed z-999
    w-full h-14 px-5
    flex justify-center items-center
    bg-sidebar
    md:px-20 
    xl:px-40 xl:h-16 2xl:px-80"
        id={active ? "" : "header"}
      >
        <div className="align w-full h-auto flex justify-between items-center">
          <Logo />

          <Navbar />

          <div className="flex justify-around items-center gap-8">
            <LangueTheme />

            <Hamburger onClick={navClick} nav={active} />
          </div>
        </div>
      </header>
    </>
  );
}


function Logo() {
  return (
    <p className="font-serif text-2xl md:text-3xl lg:text-4xl cursor-pointer">
      _tthor
    </p>
  );
}

function LangueTheme() {
  const [modeDark, setModeDark] = useState(false);

  useEffect(() => {
    if (modeDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [modeDark]);

  const { language, setLanguage, translation } = useLanguage();

  return (
    <div className="langueTheme flex justify-center items-center gap-3">
      <button
        onClick={() => {
          setLanguage(language === "fr" ? "en" : "fr");
        }}
        className="flex gap-1"
      >
        {" "}
        <Globe size={24} /> {language === "fr" ? "US" : "FR"}{" "}
      </button>

      <button onClick={() => setModeDark(!modeDark)}>
        {modeDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
}

function Hamburger({ onClick, nav }) {
  return (
    <div
      className="hamburger flex flex-col-reverse gap-2.5 cursor-pointer lg:hidden"
      onClick={onClick}
    >
      <span className="block w-6 h-0.5 bg-foreground rounded-full"></span>
      <span className="block w-4 h-0.5 bg-foreground rounded-full"></span>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="hidden lg:block">
      <ul className="w-full h-auto flex justify-between items-center gap-12 cursor-pointer">
        {navbar.map((section) => (
          <li key={section} className="lg:text-xl">
            <a href={`#${section.toLowerCase()}`}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
