import { ListRvModel, Rv } from "../features/private/models/RV.models";

export const MOCK_RV:ListRvModel[] = [
    {
        id: 1,
        dateDemande: "2024-07-01",
        statut: "Acceptée",
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
        statut: "Acceptée",
        heure: "09:00",
        specialite: "Pédiatrie"
    },
    {
        id: 4,
        dateDemande: "2024-07-15",
        statut: "Acceptée",
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
        statut: "Annulée",
        heure: "13:00",
        specialite: "Dermatologie"

    },
    {
        id: 7,
        dateDemande: "2024-07-30",
        statut: "Acceptée",
        heure: "16:00",
        specialite: "Pédiatrie"
    },
    {
        id: 8,
        dateDemande: "2024-08-05",
        statut: "Annulée",
        heure: "10:30",
        specialite: "Orthopédie"
    },
    {
        id: 9,
        dateDemande: "2024-08-05",
        statut: "Acceptée",
        heure: "10:30",
        specialite: "Cardiologie"
    }
];