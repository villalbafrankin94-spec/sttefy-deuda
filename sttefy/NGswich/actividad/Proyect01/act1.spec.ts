import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Act1 } from './act1';

describe('Act1', () => {
  let component: Act1;
  let fixture: ComponentFixture<Act1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Act1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Act1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
