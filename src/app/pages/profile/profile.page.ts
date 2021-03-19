import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  pk: string;
  username: string;
  email: string;
  firsName: string;
  lastName: string;
  phone: string;


  busername: boolean;
  bemail: boolean;
  bfirsName: boolean;
  blastName: boolean;
  bphone: boolean;



  DataUSer: any;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.busername = false;
    this.bemail = false;
    this.bfirsName = false;
    this.blastName = false;
    this.bphone = false;
    this.pk = sessionStorage.getItem("pk");
    this.DataUSer = JSON.parse(sessionStorage.getItem("user"));
  }

  update(llave, dato) {
    if (dato != undefined) {
      let item = {
        [llave]: dato
      }

      this.user.UpdateuserByid(item, this.pk).subscribe(
        (data: any) => {

          sessionStorage.setItem("user", JSON.stringify(data));

          this.ngOnInit();

        })
    } else {

    }
  }
}
