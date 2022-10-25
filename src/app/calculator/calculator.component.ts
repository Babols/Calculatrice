import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  currentValue = '0';
  secondValue = false;
  firstOp: any = null;
  operator: any = null;

  private calc(firstOp: number, secondOp: number, operator: string): any {
    switch (operator) {
      case '+':
        return firstOp + secondOp;
      case '-':
        return firstOp - secondOp;
      case '*':
        return firstOp * secondOp;
      case '/':
        return firstOp / secondOp;
      case '%':
        return firstOp % secondOp;
      case '=':
        return secondOp;
    }
  }

  getNumber(id: string) {
    if (this.secondValue) {
      this.currentValue = id;
      this.secondValue = false;
    } else {
      this.currentValue === '0'
        ? (this.currentValue = id)
        : (this.currentValue += id);
    }
  }
  getOperator(op: string) {
    console.log(op);
    if (this.firstOp === null) {
      this.firstOp = Number(this.currentValue);
    } else if (this.operator) {
      const result = this.calc(
        this.firstOp,
        Number(this.currentValue),
        this.operator
      );
      this.currentValue = String(result);
      this.firstOp = result;
    }
    this.secondValue = true;
    this.operator = op;
  }
  getComma(cma: string) {
    if (this.currentValue.indexOf('.') === -1) {
      this.currentValue += cma;
    }
  }
  getClear(clr: string) {
    if(clr === 'AC'){
      this.currentValue = '0';
      this.firstOp = null;
      this.operator = null;
      this.secondValue = false;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
