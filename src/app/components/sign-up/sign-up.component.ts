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
  email: string = "";
  phone: string = "";
  newsletter: boolean = true;
  states: string[] = [
    'Kentucky', 'Indiana', 'Tennessee', 'Ohio'
  ];
  cardTypes: string[] = ["Visa", "Mastercard", "Discover", "AMEX"];
  years: string[] = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
  months: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP","OCT", "NOV", "DEC"];
  hide: boolean = true;
  
  onKey(event: KeyboardEvent){

    let str: string = this.phone;

    if(event.key == "Backspace"){
      console.log(str.substring(0,str.length-2))
      str = str.substring(0,str.length-2)
    }
    else if(
      event.key == "0" || event.key == "1" || event.key == "2" || event.key == "3" || 
      event.key == "4" || event.key == "5" || event.key == "6" || event.key == "7" || 
      event.key == "8" || event.key == "9" )
      {
      if(this.phone.length == 0 ){
        str = "(" + event.key 
      }
      else if(this.phone.length == 3){
         str += event.key + ")";
      }
      else if(this.phone.length == 8){
        str += "-" + event.key 
      }
      else {
        str += event.key;
      }
    }
    else{
      //not backspace or number
    }
    this.phone = str;
  }
}
