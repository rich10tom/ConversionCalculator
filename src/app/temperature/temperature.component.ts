import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  selector!: string;
  result!: number;
  input!: number;

  constructor() { }

  ngOnInit(): void {
  }

  convertTemperature() {

    switch (this.selector) {
      case 'celsiusToFahrenheit':
        this.result = this.input*(9/5)+32;
        break;
      case 'fahrenheitToCelsius':
        this.result = (5/9)*(this.input - 32);
        break;
      case 'fahrenheitToKelvin':
        this.result = (5/9)*(this.input - 32) + 273;
        break;
      case 'kelvinToFahrenheit':
        this.result = (9/5)*(this.input - 273) + 32;
        break;
      case 'celsiusToKelvin':
        this.result = this.input + 273;
        break;
      case 'kelvinToCelsius':
        this.result = this.input - 273;
        break;

      default:
        alert('Invalid Selection')
        break;
    }
  }
}
