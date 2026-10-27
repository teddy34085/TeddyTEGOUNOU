
import { useLanguage } from "../languageContext";
import fr from "../../../service/fr";
import en from "../../../service/en";

import profile from "../../../assets/image/profile.webp";

import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShineBorder } from "@/components/ui/shine-border";
import { motion } from "framer-motion";

export function Hero() {
  const { translations } = useLanguage();

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
          w-full h-screen px-5 
          flex flex-col justify-center items-center
          md:px-20 xl:px-60
          "
      id="accueil"
    >
      <div
        className="alignhero 
         w-full h-auto max-w-90
         flex flex-col justify-center items-center gap-2 
         md:gap-4 md:max-w-120 lg:max-w-140
         "
      >
        <div
          className=" relative overflow-hidden
              w-40 aspect-square
              border border-sidebar-border rounded-full
              bg-sidebar shadow 
              md:w-50
              2xl:w-55
              "
        >
          <ShineBorder />

          <img
            src={profile}
            alt="profile"
            className="w-full aspect-square rounded-full"
          />
        </div>

        <div
          className="
              w-full h-auto 
              flex flex-col justify-center items-center gap-4 
              md:gap-6"
        >
          <div
            className="
                    w-full h-auto 
                    flex flex-col justify-center items-center gap-2
                    text-center"
          >
            <TypingAnimation className="font-serif text-xl lg:text-2xl 2xl:text-3xl">
              {translations.acceuil.hey}
            </TypingAnimation>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }} 
            className="font-serif text-3xl 
            md:text-4xl lg:text-5xl 2xl:text-6xl">
              Teddy TEGOUNOU
            </motion.h2>
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} 
            className="font-serif text-4xl  md:text-5xl lg:text-6xl 2xl:text-7xl">
              {translations.acceuil.poste}
            </motion.h1>
          </div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          >
            <ShimmerButton
              onClick={handleDownload}
              className="lg:text-xl"
            >
              {translations.acceuil.button}
            </ShimmerButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
