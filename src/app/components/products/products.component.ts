import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  categoriesWithPrices: any[] = [
    {
      name: 'Common Serving Sizes',
      flavors: [
        {description: '6" cake (serves 12)', price: '$15.00 single / $25.00 double'},
        {description: '8" double layer (serves 20-25)', price: '$35.00'},
        {description: '10" (serves 28-35)', price: '$45.00'},
        {description: '10" and 6" dbouble stack (serves 40-45)', price: '$65.00'},
        {description: '1/4 sheet cake 9"x13" (serves 36)', price: '$35.00'},
        {description: '1/2 sheet cake 11"x15" (serves 54)', price: '$50.00'},
        {description: 'Full sheet cake (serves 72)', price: '$70.00'}
      ]
    },
    {
      name: 'Gluten Free *add $.25 for cupcakes and $5 for each cake size',
      flavors: [
        {description: 'Vanilla*', price: ''},
        {description: 'Chocolate*', price: ''},
        {description: 'Carrot*', price: ''},
        {description: 'Strawberry*', price: ''},
        {description: 'Banana*', price: ''},
      ]
    },
    {
      name: 'More Treats',
      flavors: [
        {description: 'Cookie Cake',price: '$20.00'},
        {description: '9" Pie',price: '$20.00'},
        {description: 'Cake Pops',price: '$1.50 (basic) / $1.75 (premium)'},
        {description: 'Cakes with Fresh Fruit', price: '$75.00 (fruit must be in season)'},
      ]
    }
  ];

  categories: any[] = [
    {
      name: 'Gluten Free',
      flavors: [
        'Vanilla', 'Chocolate', 'Carrot', 'Strawberry', 'Banana'
      ]
    },
    {
      name: 'Basic Cakes',
      flavors: [
        'French Vanilla', 'Chocolate', 'Marble', 'Strawberry'
      ]
    },
    {
      name: 'Premium Cakes',
      flavors: [
        'Almond', 'Amaretto', 'Carrot', 'Chocolate Chip', 'Coconut', 'Cookie Dough', 'Cookies & Cream',
        'Italian Cream', 'Banana', 'Lemon', 'Pancake', 'Pina Colada', 'Pineapple', 'Raspberry', 'Red Velvet',
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
      name: 'Cupcakes',
      flavors: [
        'Basic', 'Premium', 'Mini Cupcakes Basic', 'Mini Cupcakes Premium', 'Jumbo Cupcake', 'Cupcake Cake / Smash Cake'
      ]
    },
    {
      name: 'Frosting Flavors',
      flavors: [
        'Vanilla Buttercream', 'Decorator Icing', 'Chocolate Buttercream', 'Almond Buttercream', 'White Chocolate Buttercream', 'Cream Cheese Frosting',
        'Peanut Butter Frosting', 'Maple Buttercream', 'Caramel Icing', 'Brown Sugar Buttercream', 'Marshmallow Buttercream', 'Lemon Cream Cheese Frosting',
        'Raspberry Buttercream', 'Coconut Cream Cheese Frosting', 'Strawberry Cream Cheese Frosting', 'Cookies & Cream', 'Chocolate Ganache'
      ]
    },
    {
      name: 'Fillings',
      flavors: [
        'None','Salted Caramel', 'Fruit Preserves', 'Lemon Curd','Chocolate Ganache', 'Marshmallow',  'Peanut Butter Buttercream', 
        'Lemon Cream Cheese Frosting','Coconut Cream Cheese Frosting','Strawbetty Cream Cheese Frosting', 'Nutella'
      ]
    }

  ]

}
