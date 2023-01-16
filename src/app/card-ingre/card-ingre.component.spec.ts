import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIngreComponent } from './card-ingre.component';

describe('CardIngreComponent', () => {
  let component: CardIngreComponent;
  let fixture: ComponentFixture<CardIngreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIngreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIngreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
