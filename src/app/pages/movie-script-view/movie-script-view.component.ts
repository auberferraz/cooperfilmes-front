import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/enums/status.enum';
import { ToastService } from 'src/app/services/toast.service';
import { UserRoteiroService } from 'src/app/services/user-roteiro.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-movie-script-view',
  templateUrl: './movie-script-view.component.html',
  styleUrls: ['./movie-script-view.component.scss']
})
export class MovieScriptViewComponent {
  roteiroData: any;
  idRoteiro: any;
  statusEnum: any = State;

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
      .subscribe({
        next: (res) => {
          this.roteiroData = res;

        },
        error: () => {
          this.toastService.show('Erro ao consultar o roteiro.', { classname: 'text-bg-danger', delay: 3000 });
        }
      });
  }

  setNextStatus() {
    this.userRoteiroService.setNextStatus(this.idRoteiro)
      .subscribe({
        next: () => {
          this.toastService.show('Roteiro passado para o proximo estágio.', { classname: 'text-bg-success', delay: 3000 });
          this.router.navigate(['lista-de-roteiros']);
          return;
        },
        error: () => {
          this.toastService.show('Erro ao processar roteiro.', { classname: 'text-bg-danger', delay: 3000 });
        }
      });
  }

}
