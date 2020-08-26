import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFunFactsCallbacksComponent } from './js-fun-facts-callbacks.component';

describe('JsFunFactsCallbacksComponent', () => {
  let component: JsFunFactsCallbacksComponent;
  let fixture: ComponentFixture<JsFunFactsCallbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsFunFactsCallbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFunFactsCallbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
