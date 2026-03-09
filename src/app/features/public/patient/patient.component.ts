import { Component } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { PatientService } from 'src/app/core/service/patient.service';
import { PatientRequest } from '../../../core/models/patient.models';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patientForm:FormGroup;
  messageSuccess:string='';
  submitted:boolean=false;
  constructor(private fb:FormBuilder,private patientService:PatientService) {
    this.patientForm=this.fb.group({
    numero: new FormControl('',(Validators.required,Validators.minLength(6))),
    nom: ['',(Validators.required)],
    prenom: ['',(Validators.required)],
    
     adresse:['',(Validators.required)],
      telephone: ['', (Validators.required,Validators.pattern(/^(77|78|79)[0-9]{7}$/))],
      antecedents: [''],
    
  }); 
  }
  get f() {
    return this.patientForm.controls;
  }
onSubmit():void{
  if(this.patientForm.valid){
    this.submitted=true;
    const patientData:PatientRequest=this.patientForm.value;
    this.patientService.createPatient(patientData);
    this.messageSuccess='Patient créé avec succès!';
    this.patientForm.reset();
 
  }
   
  
 }
 isFieldInvalid(fieldName:string):boolean{
  const field = this.f[fieldName];
  return !!(field && field.invalid && (field.dirty || field.touched));
 }
 onReset():void{
  this.messageSuccess='';
  this.patientForm.reset();

 }

}
