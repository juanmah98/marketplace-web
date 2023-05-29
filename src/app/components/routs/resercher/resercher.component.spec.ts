import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResercherComponent } from './resercher.component';

describe('ResercherComponent', () => {
  let component: ResercherComponent;
  let fixture: ComponentFixture<ResercherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResercherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResercherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
