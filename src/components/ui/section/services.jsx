
import { useLanguage } from "../languageContext";
import fr from "../../../service/fr";
import en from "../../../service/en";

import { ShineBorder } from "@/components/ui/shine-border";

import { 
  faCode, 
  faLaptopCode,
  faCartShopping,
  faRocket,
  faServer,
  faArrowRotateForward
 } from "@fortawesome/free-solid-svg-icons";

import { NomSection } from "../titreSection";
import { CardServices } from "../cardServices";

import { motion } from "framer-motion";

export function Services() {

  const { translations } = useLanguage();

  const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
   };

  const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  };

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

          <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}  
          className="text-2xl font-serif 
          lg:text-3xl 2xl:text-4xl 
          lg:max-w-3xl 2xl:max-w-4xl">
                {translations.services.sousTitre}
          </motion.h3 >

       </div>

        <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
        className="
        w-full h-auto max-w-100 mx-auto
        grid grid-cols-1 gap-6
        md:grid-cols-2 md:max-w-full
        lg:grid-cols-3
        lg:gap-3
        xl:gap-6">

          <CardServices 
          icon={faLaptopCode} 
          textH3={translations.services.service1.textH3} 
          textP={translations.services.service1.textP}/>

          <CardServices 
          icon={faCartShopping} 
          textH3={translations.services.service2.textH3} 
          textP={translations.services.service2.textP}/>

          <CardServices 
          icon={faCode} 
          textH3={translations.services.service3.textH3} 
          textP={translations.services.service3.textP}/>

          <CardServices 
          icon={faArrowRotateForward} 
          textH3={translations.services.service4.textH3} 
          textP={translations.services.service4.textP}/>

          <CardServices 
          icon={faRocket} 
          textH3={translations.services.service5.textH3} 
          textP={translations.services.service5.textP}/>


          <CardServices 
          icon={faServer} 
          textH3={translations.services.service6.textH3} 
          textP={translations.services.service6.textP}/>

        </motion.div>

      </div>
    </section>
  );
}
