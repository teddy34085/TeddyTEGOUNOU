
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { ArrowRight, Mail, Phone, CircleXIcon } from "lucide-react";


export function Navigation() {
  const [navigation, setNavigation] = useState(false);

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <div
      className="navigation z-999 
        fixed right-0
        h-screen w-3/5 ml-auto 
        bg-sidebar 
        border-l border-sidebar-border
        text-sidebar-foreground
        transition
        "
      id={navigation ? "navigation" : null}
    >
      <div className="align-navigation flex flex-col justify-center items-center">
        <div className="w-full h-auto px-5 py-4 flex justify-end items-center">
          <CircleXIcon
            size={24}
            className="text-primary"
            onClick={handleNavigation}
          />
        </div>

        <div className="navbar-info w-full h-auto flex flex-col gap-6 justify-center items-center">
          <div className="navbar w-full h-auto">
            <div
              className="group w-full px-5 py-4  bg-sidebar border-t border-sidebar-border"
              id="Accueil"
              onClick={handleNavigation}
            >
              <a
                href="#accueil"
                className="w-full h-auto flex justify-between items-center"
              >
                <p className="text-sidebar-foreground">Accueil</p>
                <ArrowRight
                  size={20}
                  className="text-sidebar-forground transition-all group-active:translate-x-1"
                />
              </a>
            </div>
            <div
              className="group w-full px-5 py-4 flex justify-between items-center bg-muted border-t border-sidebar-border"
              id="Apropos"
              onClick={handleNavigation}
            >
              <a
                href="#propos"
                className="w-full h-auto flex justify-between items-center"
              >
                <p className="text-muted-forground">Apropos</p>
                <ArrowRight
                  size={20}
                  className="text-muted-forground transition-all group-active:translate-x-1"
                />
              </a>
            </div>
            <div
              className="group w-full px-5 py-4 flex justify-between items-center bg-sidebar border-t border-sidebar-border"
              id="Services"
              onClick={handleNavigation}
            >
              <a
                href="#services"
                className="w-full h-auto flex justify-between items-center"
              >
                <p className="text-sidebar-foreground">Services</p>
                <ArrowRight
                  size={20}
                  className="text-sidebar-forground transition-all group-active:translate-x-1"
                />
              </a>
            </div>
            <div
              className="group w-full px-5 py-4 flex justify-between items-center bg-muted border-y border-sidebar-border"
              id="Projets"
              onClick={handleNavigation}
            >
              <a
                href="#projets"
                className="w-full h-auto flex justify-between items-center"
              >
                <p className="text-muted-forground">Projets</p>
                <ArrowRight
                  size={20}
                  className="text-sidebar-forground transition-all group-active:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div className="info px-5 w-full h-auto flex flex-col gap-6 justify-center items-center">
            <div className="flex gap-4 w-full h-auto">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-xl text-sidebar-forground transition-all group-active:mr-2"
              />
              <p> <a href="#">teddy34085</a> </p>
            </div>
            <div className="flex gap-4 w-full h-auto">
              <FontAwesomeIcon
                icon={faGithub }
                className="text-xl ext-sidebar-forground transition-all group-active:mr-2"
              />
              <p> <a href="#">Teddy TEGOUNOU</a> </p>
            </div>
            <div className="flex gap-4 w-full h-auto">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-xl text-sidebar-forground transition-all group-active:mr-2"
              />
              <p> <a href="#">tbr34085@gmail.com</a> </p>
            </div>
            <div className="flex gap-4 w-full h-auto">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-xl text-sidebar-forground transition-all group-active:mr-2"
              />
              <p> +237 650307945 </p>
            </div>
          </div>

          <div className="nom-prenom w-full h-auto font-serif p-5 border-t border-sidebar-border">
            <p> Teddy TEGOUNOU </p>
          </div>
        </div>
      </div>
    </div>
  );
}
