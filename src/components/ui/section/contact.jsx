import { useLanguage } from "../languageContext";
import fr from "../../../assets/service/fr";
import en from "../../../assets/service/en";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { NomSection } from "../titreSection";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { motion } from "framer-motion";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const { translations } = useLanguage();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        alert("Message envoyé avec succès !");
        form.current.reset();
      })
      .catch((error) => {
        console.log("Erreur :", error);
        alert("Une erreur est survenue.");
      });
  };

  return (
    <section
      className="
        relative 
        w-full h-full
        px-5 pb-10
        flex justify-center items-center
        md:px-20 xl:px-50 2xl:px-80"
      id="contact">
      <div
        className="
        alignServices
        w-full h-auto
        flex flex-col gap-8
        "
      >
        <NomSection titre="Contact" />

        <div className="w-full h-auto flex flex-col gap-6 lg:flex-row">
          {/* container texte  */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
            w-full h-auto 
            flex flex-col gap-6"
          >
            <h2 className="font-serif text-2xl lg:text-3xl 2xl:text-4xl">
              {translations.contact.titre}
            </h2>
            <div className="w-full h-auto flex flex-col gap-4">
              <div className="w-full h-auto flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl text-sidebar-forground transition-all group-active:mr-2"
                />
                <p className="text-xl"> tbr34085@gmail.com </p>
              </div>
              <div className="w-full h-auto flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-2xl text-sidebar-forground transition-all group-active:mr-2"
                />
                <p className="text-xl"> +237650307945 </p>
              </div>
            </div>
          </motion.div>
          {/* container formulaire  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-auto max-w-lg mx-auto"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="
                    w-full h-auto p-5
                    bg-card
                    border border-sidebar-border
                    rounded-2xl
                    shadow
                    flex flex-col gap-6
                    ">
              {/* NOM */}
              <div className="w-full h-auto flex flex-col gap-2">
                <label className="text-lg">{translations.contact.nom}</label>

                <input
                  type="text"
                  name="name"
                  className="bg-muted py-4 pl-4 rounded-xl border outline-none"
                  placeholder={translations.contact.nom}
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="w-full h-auto flex flex-col gap-2">
                <label className="text-lg">
                  {translations.contact.adresseMail}
                </label>

                <input
                  type="email"
                  name="email"
                  className="bg-muted py-4 pl-4 rounded-xl border outline-none"
                  placeholder={translations.contact.adresseMail}
                  required
                />
              </div>

              {/* TÉLÉPHONE */}
              <div className="w-full h-auto flex flex-col gap-2">
                <label className="text-lg">
                  {translations.contact.numeroTelephone}
                </label>

                <input
                  type="tel"
                  name="phone"
                  inputMode="tel"
                  className="bg-muted py-4 pl-4 rounded-xl border outline-none"
                  placeholder={translations.contact.numeroTelephone}
                />
              </div>

              {/* BOUTON */}
              <div className="w-full h-auto lg:text-xl">
                <ShimmerButton
                  type="submit"
                  className="w-full h-auto rounded-[16px] py-4 pl-4"
                >
                  {translations.contact.button}
                </ShimmerButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
