import { Epave } from "./EpaveModele";

import { Expert } from "./ExpertModele";



export interface Enchere {
    id: number;
    duree:number ;
    etat:string;
    prix:number;
    description:string;
    id_userepave:Epave;
    expert:Expert;
    
}