import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { simformLoaderComponent } from './simform-loader.component';

describe('simformLoaderComponent', () => {
  let component: simformLoaderComponent;
  let fixture: ComponentFixture<simformLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ simformLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(simformLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
