import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {

  selector!: string;
  result!: number;

  constructor() { }

  ngOnInit(): void {
  }

  convertSpeed(inputValue: HTMLInputElement) {

    switch (this.selector) {
      case 'MPHKMH':
        this.result = +inputValue.value * 1.609344;
        break;
      case 'KMHMPH':
        this.result = +inputValue.value/1.609344;
        break;
      case 'MMPH':
        this.result = +inputValue.value * 2.23694;
        break;
      case 'FTM':
        this.result = +inputValue.value * 0.3048;
        break;
      case 'MFT':
        this.result = +inputValue.value / 0.3048;
        break;
      case 'MPHK':
        this.result =  +inputValue.value * 0.868976;
        break;

      default:
        alert('Invalid Selection');
        break;
    }
  }

}
