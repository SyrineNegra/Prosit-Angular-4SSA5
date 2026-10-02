import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listeamis } from './listeamis';

describe('Listeamis', () => {
  let component: Listeamis;
  let fixture: ComponentFixture<Listeamis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listeamis],
    }).compileComponents();

    fixture = TestBed.createComponent(Listeamis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
