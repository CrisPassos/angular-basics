import { CalculatorService } from './../services/calculator.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  private number1: string;
  private number2: string;
  private result: number;
  private operator: string;

  constructor(private service: CalculatorService) { }

  ngOnInit(): void {
    this.clean();
  }


  addNumber(num: string): void {
    if (this.operator === null) {
      this.number1 = this.concatNumber(this.number1, num);
    } else {
      this.number2 = this.concatNumber(this.number2, num);
    }
  }

  defineOperator(operator: string): void {
    if (this.operator === null) {
      this.operator = operator;
      return;
    }

    if (this.number2 !== null) {
      this.result = this.service.calculate(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operator);

      this.operator = operator;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  calculate(): void {
    if (this.number2 === null) {
      return;
    }

    this.result = this.service.calculate(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operator);
  }


  concatNumber(numCurrent: string, numNew: string): string {
    if (numCurrent === '0' || numCurrent === null) {
      numCurrent = '';
    }

    if (numNew === '.' && numCurrent === '') {
      numCurrent = '0.';
    }

    if (numNew === '.' && numCurrent.indexOf('.') > -1) {
      return numCurrent;
    }

    return numCurrent + numNew;
  }


  clean(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operator = null;
  }

  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }
    if (this.number2 !== null) {
      return this.number2;
    }

    return this.number1;
  }


}
