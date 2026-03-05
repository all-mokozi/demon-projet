import { Observable } from "rxjs";
import { DemandeListResponseModel, DemandeRVFilterModel } from "../../../models/demande.models";

export interface DemandedServiceInterface {

 getDemandesRV(filter:DemandeRVFilterModel): Observable<DemandeListResponseModel>;

}