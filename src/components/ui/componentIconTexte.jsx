import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { ArrowRight, Calendar} from "lucide-react";
import React from 'react'

export function ComponentIconTexte({icon, nombre, texte}) {

  return(
    <div className='group flex gap-4 cursor-pointer'>

      
      <div className="
            w-15 aspect-square 
            flex justify-center items-center 
            transition-all 
            bg-muted p-1 
            rounded-lg
            group-active:bg-foreground
            group-focus:bg-foreground
            group-hover:bg-foreground">

                <FontAwesomeIcon icon={icon} className="
                text-4xl text-foreground 
                transition-all
                group-active:text-background 
                group-focus:text-background 
                group-hover:text-background"/>
                
      </div>


      <div className="w-full h-auto flex flex-col justify-between">
        <p className="text-xl">{nombre}</p>
        <p className="text-muted-foreground">{texte}</p>
      </div>


    </div>
  )
}