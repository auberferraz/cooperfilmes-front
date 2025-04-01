import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScriptViewComponent } from './movie-script-view.component';

describe('MovieScriptViewComponent', () => {
  let component: MovieScriptViewComponent;
  let fixture: ComponentFixture<MovieScriptViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieScriptViewComponent]
    });
    fixture = TestBed.createComponent(MovieScriptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
