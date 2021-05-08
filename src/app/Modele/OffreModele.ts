import { Enchere } from "./EnchereModele";

export interface Offre {
    id: number;
    date: Date ;
    valeur:number;
    id_enchere:Enchere;

    }