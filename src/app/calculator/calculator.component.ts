import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  currentValue = [];
  secondValue= 0;

  getNumber(id: number) {

    console.log(id);
  }
  getOperator(op: string) {
    console.log(op);
  }
  getComma(cma: string) {
    console.log(cma);
  }
  getClear(clr: string) {
    console.log(clr);
  }
  constructor() {}

  ngOnInit(): void {}
}
