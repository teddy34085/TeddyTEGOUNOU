
import fr from "../../../assets/service/fr";
import en from "../../../assets/service/en";
import { useLanguage } from "../languageContext";

import { ShineBorder } from "@/components/ui/shine-border";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUsers, faMobileScreenButton, faGaugeHigh, faUniversalAccess, faCode, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

import { NomSection } from "../titreSection";
import { CardServices } from "../cardServices";


export function Services() {
  const { translations } = useLanguage();

  return (

    <section className="
    w-full h-auto
    flex justify-center 
    items-center 
    px-5 md:px-20 xl:px-50 2xl:px-80 " 
    id="services">
      <div
        className="alignServices
        w-full h-auto
        flex flex-col gap-8">

        <div className="w-full h-auto flex flex-col gap-2 2xl:gap-4">

          <NomSection titre={translations.services.titre} />

          <h3 className="text-2xl font-serif lg:max-w-2xl lg:text-3xl 2xl:text-4xl 2xl:max-w-4xl">
                {translations.services.sousTitre}
          </h3>

       </div>

        <div className="
        w-full h-auto max-w-100 mx-auto
        grid grid-cols-1 gap-6
        md:grid-cols-2 md:max-w-full
        lg:grid-cols-3
        lg:gap-3
        xl:gap-6">

          <CardServices 
          icon={faUsers} 
          textH3={translations.services.service1.textH3} 
          textP={translations.services.service1.textP}/>

          <CardServices 
          icon={faMobileScreenButton} 
          textH3={translations.services.service2.textH3} 
          textP={translations.services.service2.textP}/>

          <CardServices 
          icon={faGaugeHigh} 
          textH3={translations.services.service3.textH3} 
          textP={translations.services.service3.textP}/>

          <CardServices 
          icon={faUniversalAccess} 
          textH3={translations.services.service4.textH3} 
          textP={translations.services.service4.textP}/>

          <CardServices 
          icon={faCode} 
          textH3={translations.services.service5.textH3} 
          textP={translations.services.service5.textP}/>


          <CardServices 
          icon={faWandMagicSparkles} 
          textH3={translations.services.service6.textH3} 
          textP={translations.services.service6.textP}/>

        </div>

      </div>
    </section>
  );
}
