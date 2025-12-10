import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Act2 } from './act2';

describe('Act2', () => {
  let component: Act2;
  let fixture: ComponentFixture<Act2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Act2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Act2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
