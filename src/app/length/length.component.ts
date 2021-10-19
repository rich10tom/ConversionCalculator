import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {

  selector!: string;
  result!: number;

  constructor() { }

  ngOnInit(): void {
  }

  convertLength(inputValue: HTMLInputElement) {

    switch (this.selector) {
      case 'INCM':
        this.result = +inputValue.value / 0.3937;
        break;
      case 'MKM':
        this.result = +inputValue.value * 1.609344;
        break;
      case 'MMPM':
        this.result = +inputValue.value * 1000000000;
        break;
      case 'FTM':
        this.result = +inputValue.value / 5280 ;
        break;
      case 'YFT':
        this.result = +inputValue.value * 3;
        break;
      case 'MY':
        this.result =  +inputValue.value * 1.093613;
        break;

      default:
        alert('Invalid Selection');
        break;
    }
  }
}
