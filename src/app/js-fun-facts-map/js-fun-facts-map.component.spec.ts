import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFunFactsMapComponent } from './js-fun-facts-map.component';

describe('JsFunFactsMapComponent', () => {
  let component: JsFunFactsMapComponent;
  let fixture: ComponentFixture<JsFunFactsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsFunFactsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFunFactsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
