import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  firstName: string = "";
  lastName: string = "";
  newsletter: boolean = true;
  states: string[] = [
    'Kentucky', 'Indiana', 'Tennessee', 'Ohio'
  ];
  cardTypes: string[] = ["Visa", "Mastercard", "Discover", "AMEX"];
  years: string[] = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
  months: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP","OCT", "NOV", "DEC"];

}
