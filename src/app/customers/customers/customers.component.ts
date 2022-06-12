import { Component, OnInit } from '@angular/core';
import {CUSTOMERS} from "../../mock-users";
import {Customer} from "../../customer";


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.customers = CUSTOMERS;
  }

}
