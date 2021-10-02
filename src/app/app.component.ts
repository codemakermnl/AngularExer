import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-exer';

  name:string = '';
  school:string = '';
  address:string = '';
  course:string = '';

  pizza : any = [ {"name": 'GLAZED BACON AMERICANA PIZZA', "size":'Large', 
  "description" : "Pizza Americana Glazed Bacon, 18-inch savory pizza topped with sweet, crisp bacon and parsley."} ,
  
  {"name": 'PEPPERONI AMERICANA PIZZA', "size":'Large', 
  "description" : "18-inch pizza fully loaded with sumptuous Pepperoni, made with 100% Mozzarella Cheese!"},

  {"name": 'FRIDAY SPECIAL', "size":'Large', 
  "description" : "Not Just For Fridays! A Pizza Loaded With Shrimp, Anchovies And Mushrooms."},

   {"name": 'MANAGER\'S CHOICE AMERICANA PIZZA', "size":'Medium', 
  "description" : "Loaded with ham, beef, italian sausage, green bell pepper and onions, made with 100% Mozzarella Cheese!"},

   {"name": 'HAWAIIAN DELIGHT PIZZA AMERICANA', "size":'Regular', 
  "description" : "pizza topped with ham and pineapples, made with 100% Mozzarella Cheese!"},

  {"name": 'CLASSIC CHEESE AMERICANA PIZZA', "size":'Large', 
  "description" : "Oozing with Pure Mozzarella Cheese, irresistibly cheesy!"},

  {"name": 'SCALLOP AND SHRIMP PIZZA AMERICANA', "size":'Large', 
  "description" : "pizza topped with scallop, shrimp and bell peppers on creamy white sauce, made with 100% Mozzarella Cheese!"},

  {"name": 'HAWAIIAN DELIGHT', "size":'Medium', 
  "description" : "All-Time Favorite Ham And Pineapple."},

  {"name": 'GARLIC N CHEESE', "size":'Large', 
  "description" : "A Supreme Classic, Cheese With Minced Garlic Best On Our Signature Thin-Crust Pizza."},

  {"name": 'BELLY BUSTER', "size":'Regular', 
  "description" : "11 Delicious Toppings! Count Them: Beef, Italian Sausage, Pepperoni, Ham, Salami, Cheddar Cheese, Salami Bits, Mushrooms, Red And Green Bell Pepper, Onions And Black Olives."},
 ];
  

}

