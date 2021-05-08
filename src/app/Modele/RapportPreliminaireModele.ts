import { Expert } from "./ExpertModele";

export interface RapportPreliminaire {
    id: number;
    firstname: string ;
    degat_constate: string;
    lieu_vehicule:string;
    valeur:number;
    valeur_epaves:number;
    image:string;
    id_expert:Expert;
}