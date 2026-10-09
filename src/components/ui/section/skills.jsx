import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faLinkedinIn,
  faCss3,
  faReact,
  faTailwindCss,
  faJs,
  faBootstrap,
  faNodeJs,
  faGitAlt
} from "@fortawesome/free-brands-svg-icons";
import { Star, StarHalf } from "lucide-react";

import { NomSection } from "../titreSection";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    skill: "Front-End",
    skillName1: "Reactjs",
    skillName2: "Javascript",
    skillName3: "Tailwind CSS",
    skillName4: "HTML",
    skillName5: "CSS",
  },
  {
    id: 2,
    skill: "Outils Design",
    skillName1: "Lunacy",
    skillName2: "Adobe XD",
    skillName3: "Figma",
  },
  {
    id: 3,
    skill: "Tools & Interaction",
    skillName1: "Github",
    skillName2: "Vercel",
    skillName3: "Netlify",
    skillName4: "Git",
  },
];

export function Skills() {
  return (
    <section
      className="
          relative 
          w-full h-full
          px-5
          flex justify-center items-center
          md:px-20 xl:px-50 2xl:px-80"
    >
      <div
        className="
        alignServices
        w-full h-auto
        flex flex-col gap-8
        "
      >
        <NomSection titre="Skills" />

        <div className="flex flex-col gap-6">
          <div
            className="
              w-full h-auto 
              grid grid-cols-1 place-items-center gap-6 
              sm:grid sm:grid-cols-2 sm:items-start
              md:max-w-2xl md:mx-auto
              lg:grid-cols-3 lg:max-w-full"
          >
            {skills.map((skill) => (
              <div
                key={skill.id}
                className=" 
                      w-full h-full max-w-xs 
                      p-5 pb-10
                      rounded-2xl 
                      bg-card 
                      flex flex-col gap-2 
                      border border-sidebar-border
                      cursor-pointer 
                      shadow 
                      md:gap-3 lg:max-w-full 2xl:max-w-full"
              >
                <h3 className="text-2xl font-serif 2xl:text-4xl">
                  {skill.skill}
                </h3>

                <div className="w-full h-auto flex flex-wrap gap-2">
                  <div className="group hover:bg-accent-foreground active:bg-accent-foreground p-2 bg-muted border rounded-lg transition-all hover:scale-90">
                    <p className="group-hover:text-accent group-active:text-accent 2xl:text-2xl">
                      {skill.skillName1}
                    </p>
                  </div>
                  <div className="group hover:bg-accent-foreground active:bg-accent-foreground p-2 bg-muted border rounded-lg transition-all hover:scale-90">
                    <p className="group-hover:text-accent group-active:text-accent 2xl:text-2xl">
                      {skill.skillName2}
                    </p>
                  </div>
                  <div className="group hover:bg-accent-foreground active:bg-accent-foreground p-2 bg-muted border rounded-lg transition-all hover:scale-90">
                    <p className="group-hover:text-accent group-active:text-accent 2xl:text-2xl">
                      {skill.skillName3}
                    </p>
                  </div>

                  {skill.skillName4 && (
                    <div className="group hover:bg-accent-foreground active:bg-accent-foreground p-2 bg-muted border rounded-lg transition-all hover:scale-90">
                      <p className="group-hover:text-accent group-active:text-accent 2xl:text-2xl">
                        {skill.skillName4}
                      </p>
                    </div>
                  )}

                  {skill.skillName5 && (
                    <div className="group hover:bg-accent-foreground active:bg-accent-foreground p-2 bg-muted border rounded-lg transition-all hover:scale-90">
                      <p className="group-hover:text-accent group-active:text-accent 2xl:text-2xl">
                        {skill.skillName5}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Competence />
        </div>
      </div>
    </section>
  );
}

function Competence() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full h-auto p-5 pb-10 
          border border-sidebar-border bg-card
          rounded-xl shadow
          2xl:p-10 2xl:pb-20
          cursor-pointer"
    >
      <div className="w-full h-auto flex flex-col items-center gap-6 2xl:gap-8">
        <div
          className="
            w-full h-auto  
            grid grid-cols-1 gap-10 
            md:grid-cols-2 
            lg:grid-cols-3 lg:gap-10"
        >
          {/*HTML*/}
          <div className="w-full h-auto flex justify-between items-center gap-4">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-5xl text-foreground"
            />
            <div className="w-full h-auto flex flex-col gap-2">
              <h3 className="text-xl">HTML</h3>
              <div className="w-full h-auto flex items-center gap-4">
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <StarHalf className="size-6 text-foreground lg:size-7" />
              </div>
            </div>
          </div>
          {/*CSS*/}
          <div className="w-full h-auto flex justify-between items-center gap-4">
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-5xl text-foreground"
            />
            <div className="w-full h-auto flex flex-col gap-2">
              <h3 className="text-xl">CSS</h3>
              <div className="w-full h-auto flex items-center gap-4">
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <StarHalf className="size-6 text-foreground lg:size-7" />
              </div>
            </div>
          </div>
          {/*Tailwind CSS*/}
          <div className="w-full h-auto flex justify-between items-center gap-4">
            <FontAwesomeIcon
              icon={faTailwindCss}
              className="text-5xl text-foreground"
            />
            <div className="w-full h-auto flex flex-col gap-2">
              <h3 className="text-xl">Tailwind Css</h3>
              <div className="w-full h-auto flex items-center gap-4">
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <StarHalf className="size-6 text-foreground lg:size-7" />
              </div>
            </div>
          </div>
          {/*Bootstap*/}
          <div className="w-full h-auto flex justify-between items-center gap-4">
            <FontAwesomeIcon
              icon={faBootstrap}
              className="text-5xl text-foreground"
            />
            <div className="w-full h-auto flex flex-col gap-2">
              <h3 className="text-xl">Bootstrap</h3>
              <div className="w-full h-auto flex items-center gap-4">
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <StarHalf className="size-6 text-foreground lg:size-7" />
              </div>
            </div>
          </div>
          {/*Javascript*/}
          <div className="w-full h-auto flex justify-between items-center gap-4">
            <FontAwesomeIcon
              icon={faJs}
              className="text-5xl text-foreground"
            />
            <div className="w-full h-auto flex flex-col gap-2">
              <h3 className="text-xl">Javascript</h3>
              <div className="w-full h-auto flex items-center gap-4">
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
              </div>
            </div>
          </div>
          {/*React js*/}
          <div className="w-full h-auto flex justify-between items-center gap-4">
            <FontAwesomeIcon
              icon={faReact}
              className="text-5xl text-foreground"
            />
            <div className="w-full h-auto flex flex-col gap-2">
              <h3 className="text-xl">React</h3>
              <div className="w-full h-auto flex items-center gap-4">
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
              </div>
            </div>
          </div>
          {/*Node js*/}
          <div className="w-full h-auto flex justify-between items-center gap-4">
            <FontAwesomeIcon
              icon={faNodeJs}
              className="text-5xl text-foreground"
            />
            <div className="w-full h-auto flex flex-col gap-2">
              <h3 className="text-xl">Node Js</h3>
              <div className="w-full h-auto flex items-center gap-4">
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
              </div>
            </div>
          </div>
          {/*Git*/}
          <div className="w-full h-auto flex justify-between items-center gap-4">
            <FontAwesomeIcon
              icon={faGitAlt}
              className="text-5xl text-foreground"
            />
            <div className="w-full h-auto flex flex-col gap-2">
              <h3 className="text-xl">Git</h3>
              <div className="w-full h-auto flex items-center gap-4">
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
                <Star className="size-6 text-foreground lg:size-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
