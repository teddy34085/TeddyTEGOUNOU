
import fr from "../../service/fr"
import en from "../../service/en"
import { useLanguage } from "./languageContext";
import { ShineBorder } from "@/components/ui/shine-border"
import { motion } from "framer-motion";

export function NomSection({titre}){


    const { translations } = useLanguage()


    return(

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                 className="flex items-center gap-1">

                      <div
                        className="relative 
                        w-6 h-4 
                        overflow-hidden 
                        border border-sidebar-border rounded-full">
                          <ShineBorder />
                          <span className="rounded-full bg-foreground"></span>
                      </div>

                        <h2 className="font-serif text-4xl lg:text-5xl 2xl:text-6xl">{titre}</h2>
                </motion.div>

    )
}