import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMovieScriptComponent } from './consult-movie-script.component';

describe('ConsultMovieScriptComponent', () => {
  let component: ConsultMovieScriptComponent;
  let fixture: ComponentFixture<ConsultMovieScriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultMovieScriptComponent]
    });
    fixture = TestBed.createComponent(ConsultMovieScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
