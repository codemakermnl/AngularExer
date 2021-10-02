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

  pizza1 = ['Cheese', 'Veggie', 'Pepperoni', 'Hawaiian', 'Meat', 'Margherita', 'BBQ Chicken', 'Supreme'];
  pizza : any = [ {"name": 'Cheese', "size":'Regular'} ,
            {"name": 'Veggie', "size":'Medium'},
            {"name": 'Pepperoni', "size":'Family'},
            {"name": 'Hawaiian', "size":'Large'},
            {"name": 'Meat', "size":'Large'},
            {"name": 'Margherita', "size":'Regular'},
            {"name": 'BBQ Chicken', "size":'Medium'},
            {"name": 'Supreme', "size":'Regular'},
            {"name": 'Cheese', "size":'Family'}, ];
  

}

