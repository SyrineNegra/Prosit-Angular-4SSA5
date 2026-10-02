import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceAjouter } from './conference-ajouter';

describe('ConferenceAjouter', () => {
  let component: ConferenceAjouter;
  let fixture: ComponentFixture<ConferenceAjouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceAjouter],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferenceAjouter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
