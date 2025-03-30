import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMovieScriptComponent } from './send-movie-script.component';

describe('SendMovieScriptComponent', () => {
  let component: SendMovieScriptComponent;
  let fixture: ComponentFixture<SendMovieScriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendMovieScriptComponent]
    });
    fixture = TestBed.createComponent(SendMovieScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
