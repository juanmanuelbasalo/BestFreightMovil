import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleteterrestrePage } from './fleteterrestre.page';

describe('FletemarPage', () => {
  let component: FleteterrestrePage;
  let fixture: ComponentFixture<FleteterrestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleteterrestrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleteterrestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
