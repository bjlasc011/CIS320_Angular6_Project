import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-payment-method.component.css']
})
export class AddPaymentMethodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name: string;
  cardType: any;
  cardNumber: number;
  cvv: number;
  month: string;
  year: string;
  cardTypes: string[] = ["Visa", "Mastercard", "Discover", "AMEX"];
  years: string[] = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
  months: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP","OCT", "NOV", "DEC"];
  
  onSubmit = new EventEmitter();
  onCancel = new EventEmitter();

  submit(){
    console.log(this.name)
    console.log(this.cardType)
    console.log(this.cardNumber)
    console.log(this.cvv)
    console.log(this.month)
    console.log(this.year)
    if(
      this.name.length >= 2 && 
      this.cardType != null && this.cardType != undefined &&
      this.cardNumber >= 999999999999999 &&
      this.cvv > 99 &&
      this.month != null && this.month != undefined &&
      this.year != null && this.year != undefined
    ){
      this.onSubmit.emit({close: true, success: true, name: this.name, cardType: this.cardType
      , cardNumber: this.cardNumber, cvv: this.cvv, month: this.month, year: this.year})
    }
    else{ this.onSubmit.emit({close: false})}
  }
  cancel(){
    console.log("cancel")
    this.onCancel.emit({close: true})
  }
}
