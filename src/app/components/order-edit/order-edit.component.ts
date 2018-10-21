import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  onSubmit = new EventEmitter;
  
  constructor(
    public dialogRef: MatDialogRef<OrderEditComponent>
  ) {}

  ngOnInit() {
  }

  submit() {
    this.onSubmit.emit({})
    this.dialogRef.close();
  }
}

export interface IEditOrder {
  orderDate: string, 
  deliveryDate: string, 
  fullfilledDate: string, 
  orderNum: string,
  price: string,
  description: string, 
  payment: string
}