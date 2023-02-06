import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicTwoComponent } from './graphic-two.component';

describe('GraphicTwoComponent', () => {
  let component: GraphicTwoComponent;
  let fixture: ComponentFixture<GraphicTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
