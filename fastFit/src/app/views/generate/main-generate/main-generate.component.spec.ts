import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGenerateComponent } from './main-generate.component';

describe('MainGenerateComponent', () => {
  let component: MainGenerateComponent;
  let fixture: ComponentFixture<MainGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
