import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWitelistComponent } from './form-witelist.component';

describe('FormWitelistComponent', () => {
  let component: FormWitelistComponent;
  let fixture: ComponentFixture<FormWitelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWitelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWitelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
