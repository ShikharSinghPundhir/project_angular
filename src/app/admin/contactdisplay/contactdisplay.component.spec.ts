import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdisplayComponent } from './contactdisplay.component';

describe('ContactdisplayComponent', () => {
  let component: ContactdisplayComponent;
  let fixture: ComponentFixture<ContactdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
