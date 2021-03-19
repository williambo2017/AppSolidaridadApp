import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public server: string = environment.url;
  public headers: any;


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');

  }

  SetTask(data) {
    let path = this.server + "api/task/";
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem("token"));
    return this.http.post<string>(path, data, { headers: this.headers });
  }


  getAllTask() {
    let path = this.server + "api/task/";
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem("token"));
    return this.http.get<string>(path, { headers: this.headers });
  }


  Finishtask(taskId) {
    let path = this.server + "api/task/" + taskId + "/";
    let data = {
      "status": "finished"
    }
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem("token"));
    return this.http.patch<string>(path, data, { headers: this.headers });
  }


  Overduetask(taskId) {
    let path = this.server + "api/task/" + taskId + "/";
    let data = {
      "status": "overdue"
    }
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem("token"));
    return this.http.patch<string>(path, data, { headers: this.headers });
  }


  DeleteTask(taskId) {
    let path = this.server + "api/task/" + taskId + "/";
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem("token"));
    return this.http.delete<string>(path, { headers: this.headers });
  }


}
