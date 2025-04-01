import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  // Adiciona um novo toast
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }
  

  // Remove um toast específico
  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  // Remove todos os toasts
  clear() {
    this.toasts = [];
  }

}
