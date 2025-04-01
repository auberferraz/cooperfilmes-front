import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movie-script',
  templateUrl: './list-movie-script.component.html',
  styleUrls: ['./list-movie-script.component.scss']
})
export class ListMovieScriptComponent {
  loginData: any;

  constructor(
      private router: Router,
    ) {
      this.loginData = this.router.getCurrentNavigation()?.extras
    }

}
