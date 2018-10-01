import { Component, OnInit, EventEmitter } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddPaymentMethodComponent } from '../add-payment-method/add-payment-method.component';

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
    { orderDate: "5/15/2018", fullfilledDate: "5/30/2018", orderNum: "1665553", price: "$85.77", description: "10\" & 6\" double stack French Vanilla", payment: "Visa ***4562" },
    { orderDate: "6/1/2018", fullfilledDate: "7/1/2018", orderNum: "1665589", price: "$70.20", description: "8\" double layer", payment: "Visa ***4562" },
    { orderDate: "5/2/2018", fullfilledDate: "pending", orderNum: "1665888", price: "$102.10", description: "Full sheet cake (serves 72)", payment: undefined },
  ]
  openDialog: MatDialogRef<AddPaymentMethodComponent, any>;

  openNewDialog() {
    this.openDialog = this.dialog.open(AddPaymentMethodComponent, {
      width: '600px',
      height: '500px'
    });
    this.openDialog.componentInstance.onSubmit.subscribe((data) => {
      console.log(data);
      if (data.close) {
        this.openDialog.close();
        this.cards.push({cardNumber: data.cardNumber, expDate: `${data.month} ${data.year}`, cardType: data.cardType });
      }
    });
    this.openDialog.componentInstance.onCancel.subscribe((data) => {
      (data.close) ? this.openDialog.close() : null;
    })
  }
  addPaymentMethod() {
    this.openNewDialog();
  }
}
