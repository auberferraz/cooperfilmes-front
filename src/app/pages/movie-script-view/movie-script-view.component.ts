import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { UserRoteiroService } from 'src/app/services/user-roteiro.service';

@Component({
  selector: 'app-movie-script-view',
  templateUrl: './movie-script-view.component.html',
  styleUrls: ['./movie-script-view.component.scss']
})
export class MovieScriptViewComponent {
  roteiroData: any;
  idRoteiro: any;

  constructor(
    private userRoteiroService: UserRoteiroService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.idRoteiro = this.route.snapshot.params["id"];
    this.getRoteiro();
  }

  getRoteiro() {
    this.userRoteiroService.getMovieScriptById(this.idRoteiro)

    this.userRoteiroService.getMovieScriptById(this.idRoteiro)
    .subscribe({
      next: (res) => {
        this.roteiroData = res;
      },
      error: () => {
        this.toastService.show('Erro ao consultar o roteiro.', { classname: 'text-bg-danger', delay: 3000 });
      }
    });
  }

}
