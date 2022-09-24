import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGarmentsComponent } from './main-garments.component';

describe('MainGarmentsComponent', () => {
  let component: MainGarmentsComponent;
  let fixture: ComponentFixture<MainGarmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGarmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGarmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
