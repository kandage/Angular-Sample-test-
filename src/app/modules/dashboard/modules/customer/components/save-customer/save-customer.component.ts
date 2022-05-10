import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: ['./save-customer.component.scss']
})
export class SaveCustomerComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl(null, [
      Validators.required,
      Validators.maxLength(45),
      Validators.minLength(3)]
    ),
    name: new FormControl(null),
    address: new FormControl(null),
    salary: new FormControl(null),
  })

  constructor() {
  }

  submitForm() {
    console.log(this.customerForm);
  }

  ngOnInit(): void {
  }

}
