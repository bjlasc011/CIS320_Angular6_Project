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
}
