import { Hero } from "../section/hero"
import { Propos } from "../section/propos"
import { Services } from "../section/services"
import { Cta } from "../section/cta"
import { Skills } from "../section/skills"
import { Contact } from "../section/contact"

export function Main(){
  return (
    <main className="
    w-full h-auto overflow-hidden
    flex flex-col justify-center items-center gap-12 lg:gap-24 2xl:gap-40">

      <Hero />

      <Propos />

      <Services />

      <Cta />

      <Skills />

      <Contact />
        
    </main>
  )
}