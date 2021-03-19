import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private route:Router){}
  
  canActivate() {
    if (this.validarSesion()) {
      return true;
    }
    else {
      this.route.navigate(['/login']);
      return false;
    }
  }

  validarSesion() {
    let token = sessionStorage.getItem("token");
    if (token != null) {
      return true;
    }
    else {
      return false;
    }
  }
}
