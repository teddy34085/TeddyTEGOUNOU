
import { useLanguage } from "../languageContext";
import fr from "../../../assets/service/fr"
import en from "../../../assets/service/en"

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShinyButton } from "@/components/ui/shiny-button";

import { TextAnimate } from "@/components/ui/text-animate"

import { motion } from "framer-motion";

export function Cta() {

  const { translations } = useLanguage()

  const scrollToSection = () => {
  document.getElementById(contact).scrollIntoView({ behavior: "smooth" });
   };

    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="
          relative 
          w-full h-full
          px-5 py-10
          flex justify-center items-center
          cursor-pointer
          md:px-20 lg:h-1/2 lg:py-20 xl:px-50 2xl:px-80 2xl:py-40">


      <div className="absolute top-0 left-0 w-full h-full bg-background z-0">
        <StarsBackground />
      </div>

      <div className="relative z-10">

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
          className="alignApropos 
          w-full h-auto 
          flex flex-col justify-center gap-6 
          md:items-center md:gap-8 lg:max-w-4xl lg:mx-auto lg:gap-10 2xl:gap-12"
        >
          <div className="w-full h-auto flex flex-col gap-4 md:items-center md:text-center">

            <TextAnimate animation="slideUp" by="word" className="font-serif text-4xl lg:text-6xl 2xl:text-6xl">
              {translations.cta.titre}
            </TextAnimate>   
            
            <p className="text-xl lg:text-2xl">{translations.cta.texte1}</p>
            
          </div>


          <div className="w-full h-auto flex flex-col gap-4">

            <div className="w-full h-auto flex flex-col gap-4 md:flex-row-reverse">
              <div className="w-full h-auto lg:text-2xl 2xl:text-xl md:flex md:justify-start">
                <ShimmerButton onClick={scrollToSection}>{translations.cta.button2}</ShimmerButton>
              </div>
              <div className="w-full h-auto 2xl:text-xl md:flex md:justify-end">
                <ShinyButton onClick={handleDownload}>{translations.cta.button1}</ShinyButton>
              </div>   
            </div>
            <p className="text-lg md:text-center lg:text-xl">{translations.cta.texte2}</p>
 
          </div>
        </motion.div>

      </div>

    </section>
  );
}
