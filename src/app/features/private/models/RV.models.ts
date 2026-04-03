//models(view model ou dto ) : classe qui représente les données utilisées dans les composants
//typiquement, les données utilisées dans les composants sont des objets de ces classes models
  // class model (attributs publics)
  //type de models : class ou interface
  //models : class ou interface,ennumeration
//models : class ou interface,ennumeration
export class Rv {
    constructor(
        public id: number, 
        public dateDemande:string,
        public statut: string,
        public heure:   string,
        public specialite: SpecialiteType
        

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

export type StatutRVModel = "Annulée" | "Acceptée" ;
   export interface ListRvModel {
        id: number;
        dateDemande: string;
        statut: StatutRVModel;
        heure: string;  
        specialite: SpecialiteType; //? : attribut optionnel 
    }
    // const d1:DemandeRv3 = {
    // id:1,datedemande:"2024-06-01",
    // statut:"en attente",
    // heure:"10:00"};
        // export enum SpecialiteModel {
        //     CARDIOLOGIE="cardiologie",
        //     DERMATOLOGIE="dermatologie",
        //     PEDIATRIE="pédiatrie",
        //     ORTHOPEDIE="orthopédie"
        // }

    export type SpecialiteType = "Cardiologie" | "Dermatologie" | "Pédiatrie" | "Orthopédie";
    export interface RVFilterModel {
        statut?: StatutRVModel;//? : attribut optionnel
        specialite?: SpecialiteType|'';//? : attribut optionnel
        page?: number;
        size?: number;

    }
    export interface RVListResponseModel {
        data: ListRvModel[];
        totalPages: number;
        currentPage: number;
        totalItems: number;
        pages: number[];
        size?: number;
    }
// let filtre:demandeRVFilterModel = {
//     statut:"en attente",
//     specialite:SpecialiteModel.CARDIOLOGIE
// }
// let filtre2:demandeRVFilterModel = {
//     statut:"en attente"
// }
// let filtre3:demandeRVFilterModel = {
//     specialite:SpecialiteModel.CARDIOLOGIE
// }