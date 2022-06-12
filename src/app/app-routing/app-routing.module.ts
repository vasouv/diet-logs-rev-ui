import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CustomersComponent} from "../customers/customers/customers.component";
import {AppointmentsComponent} from "../appointments/appointments/appointments.component";

const routes: Routes = [
  {path: "customers", component: CustomersComponent},
  {path: "appointments", component: AppointmentsComponent},
  {path: "", redirectTo: "/customers", pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
