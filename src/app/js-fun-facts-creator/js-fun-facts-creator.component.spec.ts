import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFunFactsCreatorComponent } from './js-fun-facts-creator.component';

describe('JsFunFactsCreatorComponent', () => {
  let component: JsFunFactsCreatorComponent;
  let fixture: ComponentFixture<JsFunFactsCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsFunFactsCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFunFactsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
