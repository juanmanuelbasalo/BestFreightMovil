import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FletemarPage } from './fletemar.page';

describe('FletemarPage', () => {
  let component: FletemarPage;
  let fixture: ComponentFixture<FletemarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FletemarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FletemarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
