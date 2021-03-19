import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {

   constructor(private router:Router){

   }


  canActivate() {
    if (this.validarSesion()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  validarSesion() {
    let adminBase64 = sessionStorage.getItem("token");
    if (adminBase64 != null) {
      return true;
    }
    else {
      return false;
    }
  }








  
}
