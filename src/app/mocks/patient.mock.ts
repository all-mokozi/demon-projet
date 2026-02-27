import { User } from "../core/models/user.model";
import { PatientModel } from "../features/private/models/patient.models";

export const MOCK_PATIENTS:PatientModel[] = [
  {
    id: 1,
    nom: "Ben Salah",
    prenom: "Ahmed",
    telephone: "771234567",
    adresse: "Rue de la Paix, 12345, Dakar",
    antecedents: "Aucun antécédent connu.",
    numero: "PAT001"
  },
  {
    id: 2,
    nom: "Zouari",
    prenom: "Amira",
    telephone: "779876543",
    adresse: "Avenue des Champs-Élysées, 67890, Dakar",
    antecedents: "Hypertension artérielle.",
    numero: "PAT002"
  },
  {
    id: 3,
    nom: "baye",
    prenom: "Moussa",
    telephone: "779876543",
    adresse: "Avenue des Champs-Élysées, 67890, Dakar",
    antecedents: "Hypertension artérielle.",
    numero: "PAT003"
  },
  {
    id: 4,
    nom: "Mbaye",
    prenom: "Fatou",
    telephone: "771234567",
    adresse: "Avenue des Champs-Élysées, 67890, Dakar",
    antecedents: "Hypertension artérielle.",
    numero: "PAT004"
  },
  {
    id: 5,
    nom: "Diop",
    prenom: "Seydou",
    telephone: "771234567",
    adresse: "Rue de la Paix, 12345, Dakar",
    antecedents: "Aucun antécédent connu.",
    numero: "PAT005"
  }

];