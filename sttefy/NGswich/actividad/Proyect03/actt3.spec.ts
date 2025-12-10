import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actt3 } from './actt3';

describe('Actt3', () => {
  let component: Actt3;
  let fixture: ComponentFixture<Actt3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Actt3]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Actt3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
