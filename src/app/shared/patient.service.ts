import {PatientModel} from "./patient.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  getAllPatient(): Observable<PatientModel[]> {
    return this.http.get<PatientModel[]>(`http://localhost:8081/api/patient/patients`);
  }

  getPatientById(patientId: number): Observable<PatientModel> {
    return this.http.get<PatientModel>(`http://localhost:8081/api/patient/patientbyid?patientId=${patientId}`);
  }

  getPatient(firstName: string, lastName: string): Observable<PatientModel> {
    return this.http.get<PatientModel>(`http://localhost:8081/api/patient/patient?firstName=${firstName}&lastName=${lastName}`);
  }

}
