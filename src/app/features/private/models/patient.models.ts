export interface PatientModel {
 
  nom: string;
  prenom: string;
  telephone: string;
  adresse: string;
  antecedents?: string;
  numero: string;
  id: number;
}
// Type pour les requêtes de création ou de mise à jour (sans l'id)
export type PatientRequest = Omit<PatientModel, 'id'>;