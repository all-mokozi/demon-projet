import { Injectable } from '@angular/core';
import { MOCK_PATIENTS } from '@mocks';
import { PatientRequest } from 'src/app/core/models/patient.models';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }
  createPatient(patientData:PatientRequest):void{
    const newPatient = {
      id: Math.floor(Math.random() * 1000) + 1, // Générer un ID aléatoire pour l'exemple
      ...patientData
    };
    MOCK_PATIENTS.push(newPatient);
    console.log('Patient créé:', newPatient);
  }
    }

