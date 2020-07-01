import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return 1 + 4 = 5', () => {
    const sum = service.calculate(1, 4, CalculatorService.SUM);
    expect(sum).toEqual(5);
  });

  it('should be return 2 - 2  = 0', () => {
    const sub = service.calculate(2, 2, CalculatorService.SUBSTRACT);
    expect(sub).toEqual(0);
  });

  it('should be return 1 * 3 = 3', () => {
    const mult = service.calculate(1, 3, CalculatorService.MULTIPLY);
    expect(mult).toEqual(3);
  });

  it('should be return 10 / 5 = 2', () => {
    const div = service.calculate(10, 5, CalculatorService.DIVIDE);
    expect(div).toEqual(2);
  });

  it('should be return invalid', () => {
    const invalid = service.calculate(10, 5, '?');
    expect(invalid).toEqual(0);
  });

});
