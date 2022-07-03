import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PatientComponent} from "./patient/patient.component";

const routes: Routes = [
  {path: '', redirectTo: 'patient', pathMatch: 'full'},
  {path: 'patient', component: PatientComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
