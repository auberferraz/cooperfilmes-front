import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastService: ToastService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password,
    ).subscribe({
      next: () => {
        console.log()
      },
      error: () => {
        this.toastService.show('Login inválido.', { classname: 'text-bg-danger', delay: 3000 });
      }
    });
  }

}
