import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLikedComponent } from './main-liked.component';

describe('MainLikedComponent', () => {
  let component: MainLikedComponent;
  let fixture: ComponentFixture<MainLikedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLikedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
