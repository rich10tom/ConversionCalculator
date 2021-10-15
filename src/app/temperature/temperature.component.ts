import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  selector!: string;
  result!: number;

  constructor() { }

  ngOnInit(): void {}


  convertTemperature(inputValue: HTMLInputElement) {

    switch (this.selector) {
      case 'celsiusToFahrenheit':
        this.result = (+inputValue.value)*(9/5)+32;
        break;
      case 'fahrenheitToCelsius':
        this.result = (5/9)*(+inputValue.value - 32);
        break;
      case 'fahrenheitToKelvin':
        this.result = (5/9)*(+inputValue.value - 32) + 273;
        break;
      case 'kelvinToFahrenheit':
        this.result = (9/5)*(+inputValue.value - 273) + 32;
        break;
      case 'celsiusToKelvin':
        this.result = +inputValue.value + 273;
        break;
      case 'kelvinToCelsius':
        this.result = +inputValue.value - 273;
        break;

      default:
        alert('Invalid Selection');
        break;
    }
  }
}
