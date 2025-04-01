import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastBootstrapComponent } from 'src/app/components/toast-bootstrap/toast-bootstrap.component';
import { RoteiroService } from 'src/app/services/roteiro.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-send-movie-script',
  templateUrl: './send-movie-script.component.html',
  styleUrls: ['./send-movie-script.component.scss']
})
export class SendMovieScriptComponent {

  roteiroForm!: FormGroup<any>;
  showToast = false;

  constructor(
    private formBuilder: FormBuilder,
    private roteiroService: RoteiroService,
    private toastService: ToastService,
  ) {
    this.roteiroForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      movieScript: ['', Validators.required]
    });
  }

  submit() {
    if (!this.roteiroForm.valid) {
      this.toastService.show('Formulário inválido! Preencha todos os campos.', { classname: 'text-bg-danger', delay: 3000 });
      return;
    }

    this.roteiroService.sendMovieScript(
      this.roteiroForm.value.name,
      this.roteiroForm.value.email,
      this.roteiroForm.value.phoneNumber,
      this.roteiroForm.value.movieScript,
    ).subscribe({
      next: () => {
        this.toastService.show('Roteiro enviado com sucesso.', { classname: 'text-bg-success', delay: 3000 });
        this.roteiroForm.reset();
      },
      error: () => {
        this.toastService.show('Erro ao enviar roteiro.', { classname: 'text-bg-danger', delay: 3000 });
      }
    });
  }

}
