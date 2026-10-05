
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
// import { faUser } from "@fortawesome/free-brands-svg-icons"

export function CardServices ({icon, textH3, textP}){
    return ( 
    <div className="
        w-full h-auto p-5
        text-card-foreground 
        border border-sidebar-border bg-card
        shadow rounded-xl
        cursor-pointer 
        flex justify-center items-center" >

        
        <div className="group w-full h-auto flex flex-col gap-3 text-xl ">
           
            <div className="
            w-15 aspect-square 
            flex justify-center items-center 
            transition-all 
            bg-muted p-3 
            rounded-xl
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

            <h3 className="text-2xl font-serif">{textH3}</h3>

            <p className="text-muted-foreground">{textP}</p>

        </div>

    </div>

    )
}