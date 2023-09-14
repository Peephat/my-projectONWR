import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerfootComponent } from './containerfoot.component';

describe('ContainerfootComponent', () => {
  let component: ContainerfootComponent;
  let fixture: ComponentFixture<ContainerfootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerfootComponent]
    });
    fixture = TestBed.createComponent(ContainerfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
