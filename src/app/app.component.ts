import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Title';
  count=0;

  listOfNumbers=["Audi", "BMW", "Prime"];
  listOfPL=["C++", "Java", "Python"];

  increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }

  number1=10;
  number2=11;
  

  Add = () => {
    let myContainer = document.getElementById('A') as HTMLInputElement;
    myContainer.value = String(this.number1+this.number2);
  }
}