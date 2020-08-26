import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFunFactsPromisesComponent } from './js-fun-facts-promises.component';

describe('JsFunFactsPromisesComponent', () => {
  let component: JsFunFactsPromisesComponent;
  let fixture: ComponentFixture<JsFunFactsPromisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsFunFactsPromisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFunFactsPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
