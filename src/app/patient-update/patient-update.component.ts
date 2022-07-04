import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientModel} from "../shared/patient.model";
import {PatientService} from "../shared/patient.service";

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.scss']
})
export class PatientUpdateComponent implements OnInit {

  patientUpdateForm!: FormGroup;
  @Input()
  patientToUpdate!: PatientModel;
  @Input()
  show!: boolean;
  patientUpdate!: PatientModel;

  constructor(private patientService: PatientService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.patientUpdateForm = this.formBuilder.group({
      lastName: [this.patientToUpdate.lastName, {validators: Validators.required}],
      firstName: [this.patientToUpdate.firstName, {validators: Validators.required}],
      dateOfBirth: [this.patientToUpdate.dateOfBirth, {validators: Validators.required}],
      gender: [this.patientToUpdate.gender, {validators: Validators.required}],
      address: [this.patientToUpdate.address, {validators: Validators.required}],
      phoneNumber: [this.patientToUpdate.phoneNumber, {validators: Validators.required}],
    }, {
      updateOn: 'change'
      });
  }

  onSubmitForm() {
    this.patientUpdate = {
      id: this.patientToUpdate.id,
      firstName: this.patientUpdateForm.value.firstName,
      lastName: this.patientUpdateForm.value.lastName,
      dateOfBirth: this.patientUpdateForm.value.dateOfBirth,
      gender: this.patientUpdateForm.value.gender,
      address: this.patientUpdateForm.value.address,
      phoneNumber: this.patientUpdateForm.value.phoneNumber
    }

    this.patientService.updatePatient(this.patientUpdate).subscribe();

    this.show=false;
    window.location.reload();
  }

  }
