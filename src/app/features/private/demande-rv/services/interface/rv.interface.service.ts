import { Observable } from "rxjs";
import { RVFilterModel, RVListResponseModel } from "../../../models/RV.models";
import { InjectionToken } from "@angular/core";

export interface RVServiceInterface {

  getRVDemande(filter:RVFilterModel): Observable<RVListResponseModel>;

}
export const RV_SERVICE_TOKEN = new InjectionToken<RVServiceInterface>('RV_SERVICE_TOKEN');
