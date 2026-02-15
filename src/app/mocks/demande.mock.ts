import { DemandeListRvModel } from "../features/private/models/demande.models";

export const MOCK_DEMANDES:DemandeListRvModel[] = [
    {
        id: 1,
        dateDemande: "2024-07-01",
        statut: "En attente",
        heure: "10:00",
        specialite:'Cardiologie'
    },
    {
        id: 2,
        dateDemande: "2024-07-05",
        statut: "Acceptée",
        heure: "14:00",
        specialite:  "Dermatologie"
    },
    { 
        id: 3,
        dateDemande: "2024-07-10",
        statut: "Refusée",
        heure: "09:00",
        specialite: "Pédiatrie"
    },
    {
        id: 4,
        dateDemande: "2024-07-15",
        statut: "En attente",
        heure: "11:00",
        specialite: "Orthopédie"
    },
    {
        id: 5,
        dateDemande: "2024-07-20",
        statut: "Acceptée",
        heure: "15:00",
        specialite: "Cardiologie"
    },
    {
        id: 6,
        dateDemande: "2024-07-25",
        statut: "En attente",
        heure: "13:00",
        specialite: "Dermatologie"

    },
    {
        id: 7,
        dateDemande: "2024-07-30",
        statut: "En attente",
        heure: "16:00",
        specialite: "Pédiatrie"
    },
    {
        id: 8,
        dateDemande: "2024-08-05",
        statut: "En attente",
        heure: "10:30",
        specialite: "Orthopédie"
    }
];