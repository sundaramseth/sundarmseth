import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdComponent } from './viewd.component';

describe('ViewdComponent', () => {
  let component: ViewdComponent;
  let fixture: ComponentFixture<ViewdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
