import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadEvent, UploadFile, FileComponent, FileSystemFileEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.minDate = new Date();
    this.deliveryType = 'undecided';
  }
  public files: UploadFile[] = [];
 
  public dropped(event: UploadEvent) {
    event.files.forEach((f) => {
    this.files.push(f);
    })
  }

  public deleteImg(uploadFile: UploadFile){
    this.files = this.files.filter((f)=>{
      return f.fileEntry.name !== uploadFile.fileEntry.name;
    })
  }
  newsletter: boolean = true;
  glutenFree: boolean = false;
  picker: Date;
  deliveryType: string;
  showAddress:boolean = false;
  minDate: Date;
  tierCount: number = 1;
  tiers: String[] = ['1', '2', '3', 'Request 4+'];
  cardTypes: string[] = ["Visa", "Mastercard", "Discover", "AMEX"];
  years: string[] = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
  months: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP","OCT", "NOV", "DEC"];
  states: string[] = [
    'Kentucky', 'Indiana', 'Tennessee', 'Ohio'
  ];
  servings: string[] = [
    '6" cake (serves 12)',
    '8" double layer (serves 20-25)',
    '10" and 6" dbouble stack (serves 40-45)',
    '1/4 sheet cake 9"x13" (serves 36)',
    '10" (serves 28-35)',
    '1/2 sheet cake 11"x15" (serves 54)',
    'Full sheet cake (serves 72)'
  ];
  flavorGroups: Object[] = [
    {
      name: 'Basic Cakes',
      flavors: [
        'French Vanilla', 'Chocolate', 'Marble', 'Strawberry'
      ]
    },
    {
      name: 'Premium Cakes',
      flavors: [
        'Almond', 'Amaretto','Carrot', 'Chocolate Chip', 'Coconut', 'Cookie Dough', 'Cookies & Cream',
        'Italian Cream', 'Banana', 'Lemon','Pancake', 'Pina Colada','Pineapple', 'Raspberry', 'Red Velvet',
        'Spice', 'White Chocolate', 'Hummingbird'
      ]
    },
    {
      name: 'Seasonal Cakes',
      flavors: [
        'Caramel Apple', 'Pumpkin', 'Pecan Pie', 'Sugar Cookie', 'Hot Chocolate', 'Gingerbread'
      ]
    },
    {
      name: 'Gluten Free',
      flavors: [
        'Vanilla', 'Chocolate', 'Carrot', 'Strawberry', 'Banana'
      ]
    },
    {
      name: 'Cupcakes',
      flavors: [
        'Basic', 'Premium', 'Mini Cupcakes Basic', 'Mini Cupcakes Premium', 'Jumbo Cupcake', 'Cupcake Cake / Smash Cake'
      ]
    },
    {
      name: 'More Treats',
      flavors: [
        'Cookie Cake', '9" Pie', 'Cake Pops', 'Cakes with Fresh Fruit'
      ]
    }
    
  ]

  frostings: String[] = [
    'Vanilla Buttercream', 'Decorator Icing', 'Chocolate Buttercream', 'Almond Buttercream','White Chocolate Buttercream', 'Cream Cheese Frosting',
    'Peanut Butter Frosting',  'Maple Buttercream', 'Caramel Icing', 'Brown Sugar Buttercream','Marshmallow Buttercream', 'Lemon Cream Cheese Frosting',
    'Raspberry Buttercream', 'Coconut Cream Cheese Frosting', 'Strawberry Cream Cheese Frosting', 'Cookies & Cream', 'Chocolate Ganache'
  ]

  fillings: String[] = [
    'None','Salted Caramel', 'Fruit Preserves', 'Lemon Curd','Chocolate Ganache', 'Marshmallow',  'Peanut Butter Buttercream', 
    'Lemon Cream Cheese Frosting','Coconut Cream Cheese Frosting','Strawbetty Cream Cheese Frosting', 'Nutella'
  ]
  public deliveryChange(): void{
    if(this.deliveryType=='delivery'){
      this.showAddress = true;
    }
    else {
      this.showAddress = false;
    }
  }
  navCakeGallery(): void{
    console.log('nav to cake-gallery');
    const link = ['/cake-gallery']
    this.router.navigate([link]);
  }
}
