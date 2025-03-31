import { Component, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast-bootstrap',
  templateUrl: './toast-bootstrap.component.html',
  styleUrls: ['./toast-bootstrap.component.scss']
})
export class ToastBootstrapComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }

}
