import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaknessesMatrixComponent } from './weaknesses-matrix.component';

describe('WeaknessesMatrixComponent', () => {
  let component: WeaknessesMatrixComponent;
  let fixture: ComponentFixture<WeaknessesMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaknessesMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaknessesMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
