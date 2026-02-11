import { DemandeListRvModel, SpecialiteModel, StatutDemandeModel } from "../features/private/models/demande.models";

export const MOCK_DEMANDES:DemandeListRvModel[] = [
    {
        id: 1,
        dateDemande: "2024-07-01",
        statut: "en attente",
        heure: "10:00",
        specialite: SpecialiteModel.CARDIOLOGIE
    },
    {
        id: 2,
        dateDemande: "2024-07-05",
        statut: "acceptée",
        heure: "14:00",
        specialite: SpecialiteModel.DERMATOLOGIE
    },
    { 
        id: 3,
        dateDemande: "2024-07-10",
        statut: "refusée",
        heure: "09:00",
        specialite: SpecialiteModel.PEDIATRIE
    }
];