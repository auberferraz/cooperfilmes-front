import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoteiroService } from 'src/app/services/roteiro.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-consult-movie-script',
  templateUrl: './consult-movie-script.component.html',
  styleUrls: ['./consult-movie-script.component.scss']
})
export class ConsultMovieScriptComponent {
  consultForm!: FormGroup<any>;
  showToast = false;
  consultData: any;

  constructor(
    private formBuilder: FormBuilder,
    private consultService: RoteiroService,
    private toastService: ToastService,
  ) {
    this.consultForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  submit() {
    if (!this.consultForm.valid) {
      this.toastService.show('Formulário inválido! Preencha todos os campos.', { classname: 'text-bg-danger', delay: 3000 });
      return;
    }

    this.consultService.consultMovieScript(
      this.consultForm.value.email,
    ).subscribe({
      next: (res) => {
        this.consultData = res;
      },
      error: () => {
        this.toastService.show('Erro ao consultar o roteiro.', { classname: 'text-bg-danger', delay: 3000 });
      }
    });
  }

}
