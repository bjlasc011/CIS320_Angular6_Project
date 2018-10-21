import { Component, OnInit, EventEmitter } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { supportsWebAnimations } from '@angular/animations/browser/src/render/web_animations/web_animations_driver';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }
  cards: any = [
    {
      cardNumber: "1234567890123456",
      expDate: "DEC 2020",
      cardType: "Visa"
    },
    {
      cardNumber: "1234567890121108",
      expDate: "SEP 2019",
      cardType: "AMEX"
    },
  ]

  ngOnInit() {
  }
  addressEdit: boolean = false;
  phoneEdit: boolean = false;
  emailEdit: boolean = false;
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
    { orderDate: "5/15/2018", deliveryDate:  "5/30/2018", fullfilledDate: "5/30/2018", orderNum: "1665553", price: "$85.77", description: "10\" & 6\" double stack French Vanilla", payment: "Complete" },
    { orderDate: "6/1/2018", deliveryDate: "7/1/2018", fullfilledDate: "7/1/2018", orderNum: "1665589", price: "$70.20", description: "8\" double layer", payment: "Complete" },
    { orderDate: "5/2/2018", deliveryDate: "11/10/2018", fullfilledDate: "pending", orderNum: "1665888", price: "$102.10", description: "Full sheet cake (serves 72)", payment: undefined },
  ]
  states: string[] = [
    'KY', 'IN', 'TN', 'OH'
  ];

  submit(){
    this.emailEdit = false;
    this.addressEdit = false;
    this.phoneEdit = false;
  }
  editPhone(){
    this.phoneEdit = true;
  }
  editAddress(){
    this.addressEdit = true;
  }
  editEmail(){
    this.emailEdit = true;
  }
}