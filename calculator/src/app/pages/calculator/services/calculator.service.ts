import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  static readonly SUM: string = '+';
  static readonly SUBSTRACT: string = '-';
  static readonly DIVIDE: string = '/';
  static readonly MULTIPLY: string = '*';

  constructor() { }

  calculate(num1: number, num2: number, operator: string): number {
    switch (operator) {
      case CalculatorService.SUM:
        return num1 + num2;
      case CalculatorService.SUBSTRACT:
        return num1 - num2;
      case CalculatorService.DIVIDE:
        return num1 / num2;
      case CalculatorService.MULTIPLY:
        return num1 * num2;

      default:
        return 0;
    }
  }

}
