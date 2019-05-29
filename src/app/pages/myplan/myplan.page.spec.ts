import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyplanPage } from './myplan.page';

describe('MyplanPage', () => {
  let component: MyplanPage;
  let fixture: ComponentFixture<MyplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyplanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
