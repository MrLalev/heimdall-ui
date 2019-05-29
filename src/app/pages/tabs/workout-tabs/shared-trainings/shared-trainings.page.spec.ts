import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTrainingsPage } from './shared-trainings.page';

describe('SharedTrainingsPage', () => {
  let component: SharedTrainingsPage;
  let fixture: ComponentFixture<SharedTrainingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedTrainingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTrainingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
