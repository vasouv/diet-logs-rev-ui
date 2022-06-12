import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { AppointmentsComponent } from './appointments/appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
