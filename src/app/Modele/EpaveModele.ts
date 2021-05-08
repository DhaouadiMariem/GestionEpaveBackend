import { Client } from "./ClientModele";
import { Enchere } from "./EnchereModele";
import { Epaviste } from "./EpavisteModele";
import { Expert } from "./ExpertModele";
import { Gestionnaire } from "./GestionnaireModele";
import { RapportPreliminaire } from "./RapportPreliminaireModele";
import { Vehicule } from "./VehiculeModele";


export interface Epave {
    id: number;
    prix: number ;
    date_daccident:Date;
    id_expert:Expert;
    id_epaviste:Epaviste;
    id_client:Client;
    id_gestionnaire:Gestionnaire;




    vehicule:Vehicule;
    expert:Expert;
    epaviste:Epaviste;
    client:Client;
    gestionnaire:Gestionnaire;
    rapportPreliminaire:RapportPreliminaire;
    enchere:Enchere;
 

}
