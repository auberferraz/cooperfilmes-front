import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authToken = sessionStorage.getItem('auth-token');
    const userRole = sessionStorage.getItem('user-role');

    if (authToken && userRole) {
      return true;
    } else {
      this.logout();
      this.router.navigate(['/login']);
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('user-role');
  }

}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionService).canActivate(next, state);
}