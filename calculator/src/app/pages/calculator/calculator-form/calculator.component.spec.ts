import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { By } from '@angular/platform-browser';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be return 3 + 2 = 5', () => {
    // take id element
    const btn3 = fixture.debugElement.query(By.css('#btn3'));
    const btnSum = fixture.debugElement.query(By.css('#btnSoma'));
    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    const btnCalc = fixture.debugElement.query(By.css('#btnCalcular'));
    const display = fixture.debugElement.query(By.css('#display'));

    // should be excute event
    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSum.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalc.triggerEventHandler('click', null);
    fixture.detectChanges();

    debugger;

    expect(display.nativeElement.value).toEqual('5');

  });
});
