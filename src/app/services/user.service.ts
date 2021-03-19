import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public server: string = environment.url;
  public headers: any;


  constructor(private http: HttpClient,
    private toastController: ToastController) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  Register(data) {
    let path = this.server + "auth/registration/";
    return this.http.post<string>(path, data, { headers: this.headers });
  }


  login(data) {
    let path = this.server + "auth/login/";
    return this.http.post<string>(path, data, { headers: this.headers });
  }

  user() {
    let path = this.server + "api/user/";
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem("token"));
    return this.http.get<string>(path, { headers: this.headers });
  }


  userByid(pk) {
    let path = this.server + "api/user/" + pk + "/";
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem("token"));
    return this.http.get<string>(path, { headers: this.headers });
  }


  UpdateuserByid(data, pk) {
    let path = this.server + "api/user/" + pk + "/";
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem("token"));
    return this.http.patch<string>(path, data, { headers: this.headers });
  }



  async Warning(message) {
    const toast = await this.toastController.create({
      message,
      position: 'top',
      color: "primary",
      duration: 2000
    });
    toast.present();
  }


  orderbyPriorityLowertohigher(data) {
    let array = data.sort(function (a, b) {
      if (a.priority < b.priority) {
        return -1;
      }
    });
    return array
  }

  orderbyPriorityhighertoLower(data) {
    let array = data.sort(function (a, b) {
      if (a.priority > b.priority) {
        return -1;
      }
    });
    return array
  }



}
