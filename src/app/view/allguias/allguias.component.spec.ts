import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllguiasComponent } from './allguias.component';

describe('AllguiasComponent', () => {
  let component: AllguiasComponent;
  let fixture: ComponentFixture<AllguiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllguiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllguiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
