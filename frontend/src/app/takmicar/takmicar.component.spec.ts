import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakmicarComponent } from './takmicar.component';

describe('TakmicarComponent', () => {
  let component: TakmicarComponent;
  let fixture: ComponentFixture<TakmicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakmicarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakmicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
