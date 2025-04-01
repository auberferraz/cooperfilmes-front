import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieScriptComponent } from './list-movie-script.component';

describe('ListMovieScriptComponent', () => {
  let component: ListMovieScriptComponent;
  let fixture: ComponentFixture<ListMovieScriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMovieScriptComponent]
    });
    fixture = TestBed.createComponent(ListMovieScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
