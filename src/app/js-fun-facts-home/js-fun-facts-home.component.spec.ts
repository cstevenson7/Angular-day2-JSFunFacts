import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFunFactsHomeComponent } from './js-fun-facts-home.component';

describe('JsFunFactsHomeComponent', () => {
  let component: JsFunFactsHomeComponent;
  let fixture: ComponentFixture<JsFunFactsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsFunFactsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFunFactsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
