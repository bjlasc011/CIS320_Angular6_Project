import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }
  cardNumber: string = "1234567890123456";
  expDate: string = "12/18";
  cardType: string = "Visa";
  cardNumber1: string = "1234567890121108";
  expDate1: string = "09/21";
  cardType1: string = "AMEX";
  ngOnInit() {
    console.log(this.cardNumber.substring((this.cardNumber.length-4)));
  }
  edit: boolean = false;
  firstName = "Ben";
  lastName = "Lascurain";
  phone = "(502) 662-5800";
  email = "benjay@gmail.com";
  address1 = "543 Cakeland Dr";
  address2 = "Apt 202";
  city = "Louisville";
  state = "KY";
  zip = "40243";
  orders = [
    {orderDate: "5/15/2018", fullfilledDate: "5/30/2018", orderNum: "1665553", price: "$85.77", description: "10\" & 6\" double stack French Vanilla"},
    {orderDate: "6/1/2018", fullfilledDate: "7/1/2018", orderNum: "1665589", price: "$70.20", description: "8\" double layer"}
  ]
}
