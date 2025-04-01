import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent {
  authToken: any;

  constructor(
    private permissionService: PermissionService,
    private router: Router,
  ) {
    this.getPemission();
  }

  getPemission() {
    this.authToken = sessionStorage.getItem('auth-token');
  }

  logout() {
    this.permissionService.logout();
    this.router.navigate(["/login"]);
  }

}
