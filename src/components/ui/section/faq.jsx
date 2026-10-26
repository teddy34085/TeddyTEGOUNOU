
import { useLanguage } from "../languageContext";
import fr from "../../../service/fr";
import en from "../../../service/en";

import { motion } from "framer-motion";
import { NomSection } from "../titreSection";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Accordellion } from "../accordellion"

export function Faq(){
    const { translations } = useLanguage();
                
    return (
   <section
        className="
          relative 
          w-full h-full
          px-5 pb-10
          flex justify-center items-center
          md:px-20 xl:px-50 2xl:px-80"
               id="accueil"
             >
            <div
        className="
        alignServices
        w-full h-auto
        flex flex-col gap-8
        lg:flex-row lg:gap-4"
      >
          <div className="w-full h-auto flex flex-col gap-4 lg:justify-between">
             <div>      
                    <NomSection titre="FAQ" />
                    <h2 className="w-2/3 font-serif text-2xl lg:text-3xl 2xl:text-4xl">{translations.faq.faqText}</h2>
             </div> 
             <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}            
            className="
             w-full h-auto 
             bg-card border border-sidebar-border 
             rounded-xl p-5 
             flex flex-col gap-4
             shadow max-w-lg mx-auto lg:mx-0">
                   <div className="w-full h-auto flex flex-col gap-2">
                     <h2 className="font-serif text-2xl lg:text-3xl 2xl:text-4xl">{translations.faq.faqText1}</h2>
                     <p className="text-xl">{translations.faq.faqText2}</p>
                  </div> 
                  <div className="w-full h-auto lg:text-xl md:flex md:justify-start">
                     <ShimmerButton onClick={() => (window.location.href = "mailto:tbr34085@gmail.com")}>{translations.faq.faqButton}</ShimmerButton>
                  </div>
             </motion.div>
          </div> 
             <Accordellion />
      </div>
    </section>
)
}