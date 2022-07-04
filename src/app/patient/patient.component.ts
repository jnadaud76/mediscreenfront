import { Component, OnInit } from '@angular/core';
import {PatientModel} from "../shared/patient.model";
import {PatientService} from "../shared/patient.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit{
  patient$!: Observable<PatientModel>;
  patientForm! : FormGroup;
  show=false;

  constructor(private patientService: PatientService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      lastName: ['', {validators: Validators.required}],
      firstName: ['', {validators: Validators.required}],
    })
  }

  onSubmit() {
  this.patient$ = this.patientService.getPatient(this.patientForm.value.firstName, this.patientForm.value.lastName);
  }

  onUpdate() {
  this.show=true;
  }

}
