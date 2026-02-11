//models(view model ou dto ) : classe qui représente les données utilisées dans les composants
//typiquement, les données utilisées dans les composants sont des objets de ces classes models
  // class model (attributs publics)
  //type de models : class ou interface
  //models : class ou interface,ennumeration
//models : class ou interface,ennumeration
export class DemandeRv {
    constructor(
        public id: number, 
        public datedemande:Date,
        public statut: string,
        public heure: string

    )
         {}        
}
//instenciation
// const d1 = new DemandeRv(1,new Date("2024-06-01"),"en attente","10:00");
class demandeRv2 {
     public id: number;
        public datedemande: string;
        public statut: string;
        public heure: string;   

    constructor(  id: number, 
          datedemande: string,
          statut: string,
         heure: string){
            this.id=id;
            this.datedemande=datedemande;
            this.statut=statut;
            this.heure=heure;
        }
    }
    // const d1 = new demandeRv2(1,"2024-06-01","en attente","10:00");

    //ou
//     export enum StatutDemandeModel {
//     EN_ATTENTE="en attente",
//     ACCEPTER="acceptée",
//     REFUSER="refusée"
// }

export type StatutDemandeModel = "en attente" | "acceptée" | "refusée";
   export interface DemandeListRvModel {
        id: number;
        dateDemande: string;
        statut: StatutDemandeModel;
        heure: string;  
        specialite: SpecialiteModel; //? : attribut optionnel 
    }
    // const d1:DemandeRv3 = {
    // id:1,datedemande:"2024-06-01",
    // statut:"en attente",
    // heure:"10:00"};
    export enum SpecialiteModel {
        CARDIOLOGIE="cardiologie",
        DERMATOLOGIE="dermatologie",
        PEDIATRIE="pédiatrie",
        ORTHOPEDIE="orthopédie"
    }
    