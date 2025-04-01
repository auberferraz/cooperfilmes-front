import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup<any>;
  showToast = false;
  loginData: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastService: ToastService,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      this.toastService.show('Formulário inválido! Preencha todos os campos.', { classname: 'text-bg-danger', delay: 3000 });
      return;
    }

    this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password,
    ).subscribe({
      next: (res) => {
        this.loginData = res;
        this.router.navigate(['/lista-de-roteiros'], this.loginData);
      },
      error: () => {
        this.toastService.show('Login inválido.', { classname: 'text-bg-danger', delay: 3000 });
      }
    });
  }

}
