import { Component, OnInit } from '@angular/core';
import {Appointment} from "../../appointment";
import {APPOINTMENTS} from "../../mock-appointments";


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor() { }

  ngOnInit(): void {
    this.appointments = APPOINTMENTS;
  }

}
