import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exer';

  name:string = '';
  school:string = '';
  address:string = '';
  course:string = '';

  pizza = ['Cheese', 'Veggie', 'Pepperoni', 'Hawaiian', 'Meat', 'Margherita', 'BBQ Chicken', 'Supreme'];

  
}
