import { useLanguage } from "../languageContext";
import fr from "../../../assets/service/fr";
import en from "../../../assets/service/en";

import { Star, StarHalf } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faLinkedinIn,
  faCss3,
  faReact,
  faTailwindCss,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCalendar,
  faSmile,
  faCode,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShineBorder } from "@/components/ui/shine-border";

import { NomSection } from "../titreSection";
import { ComponentIconTexte } from "../componentIconTexte";

import aproposImage from "../../../assets/image/aproposImage.webp";

import { motion } from "framer-motion";

export function Propos() {

  const { translations } = useLanguage();

  return (
    <section
      className="
            w-full h-auto px-5 
            flex justify-center items-center
            md:px-20 xl:px-50 2xl:px-80"
      id="propos"
    >
      <div
        className="alignApropos 
            w-full h-auto 
            flex flex-col justify-center items-center gap-6 
            lg:flex-row-reverse
            xl:gap-12"
      >
        <Texte />

        <Image />

      </div>
    </section>
  );
}

function Texte() {
  const { translations } = useLanguage();
  return (
    <div 
    className="
    w-full h-auto 
    flex flex-col 
    justify-start gap-2 
    2xl:gap-4">
      <NomSection titre={translations.propos.titre} />

      <div 
      className="
      w-full h-auto 
      flex flex-col 
      justify-start gap-4 
      2xl:gap-8">

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}        
          className="
          w-full h-auto 
          flex flex-col 
          justify-start gap-2 
          2xl:gap-4">
          <h3 className="text-2xl font-serif lg:text-3xl 2xl:text-4xl">
            {translations.propos.textepropos}
          </h3>
          <p className="text-xl text-muted-foreground 2xl:text-2xl">
            {translations.propos.textepropos2}
          </p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}        
          className="
          w-full h-auto 
          grid gap-6 
          md:grid-cols-2 
          md:gap-8">
          <ComponentIconTexte
            icon={faCalendar}
            nombre={translations.propos.competence1.nombre}
            texte={translations.propos.competence1.texte}
          />
          <ComponentIconTexte
            icon={faCode}
            nombre={translations.propos.competence2.nombre}
            texte={translations.propos.competence2.texte}
          />
          <ComponentIconTexte
            icon={faSmile}
            nombre={translations.propos.competence3.nombre}
            texte={translations.propos.competence3.texte}
          />
          <ComponentIconTexte
            icon={faTrophy}
            nombre={translations.propos.competence4.nombre}
            texte={translations.propos.competence4.texte}
          />
        </motion.div>
      </div>
    </div>
  );
}


function Image() {
  return (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
            className="relative 
            w-full h-auto 
            flex flex-col 
            overflow-hidden max-w-md
            md:w-2/3 md:max-w-full 2xl:w-1/2"
    >
      <img
        src={aproposImage}
        alt="aproposImage"
        className="w-full h-auto object-contain"
      />
      <div className="w-full h-50 bg-background absolute bottom-[-80px] z-20 blur-xl 2xl:bottom-[-50px]"></div>
    </motion.div>
  );
}

