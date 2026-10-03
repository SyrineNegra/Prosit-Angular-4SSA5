import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceListe } from './conference-liste';

describe('ConferenceListe', () => {
  let component: ConferenceListe;
  let fixture: ComponentFixture<ConferenceListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceListe],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferenceListe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
