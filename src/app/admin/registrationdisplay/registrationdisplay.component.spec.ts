import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationdisplayComponent } from './registrationdisplay.component';

describe('RegistrationdisplayComponent', () => {
  let component: RegistrationdisplayComponent;
  let fixture: ComponentFixture<RegistrationdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
