import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNgMoldelComponent } from './form-ng-moldel.component';

describe('FormNgMoldelComponent', () => {
  let component: FormNgMoldelComponent;
  let fixture: ComponentFixture<FormNgMoldelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNgMoldelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNgMoldelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
