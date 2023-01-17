import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillosDashboardComponent } from './platillos-dashboard.component';

describe('PlatillosDashboardComponent', () => {
  let component: PlatillosDashboardComponent;
  let fixture: ComponentFixture<PlatillosDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatillosDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
