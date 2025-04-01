import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { UserRoteiroService } from 'src/app/services/user-roteiro.service';

@Component({
  selector: 'app-list-movie-script',
  templateUrl: './list-movie-script.component.html',
  styleUrls: ['./list-movie-script.component.scss']
})
export class ListMovieScriptComponent {
  roteiroData: any;

  constructor(
    private userRoteiroService: UserRoteiroService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.getRoteiro()
  }

  getRoteiro() {
    this.userRoteiroService.getAllMovieScript()
      .subscribe({
        next: (res) => {
          this.roteiroData = res;
        },
        error: () => {
          this.toastService.show('Erro ao consultar o roteiro.', { classname: 'text-bg-danger', delay: 3000 });
        }
      });
  }

  navigateMovieScript(id: number) {
    this.router.navigate([`/roteiro/${id}`])
  }

}
