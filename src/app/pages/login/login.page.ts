import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form: FormGroup

  user: string;
  email: string;
  password: string


  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private taskService: TaskService,
    private route: Router) { }

  ngOnInit() {

    sessionStorage.clear();
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

    });
  }

  login() {
    if (this.form.status == "VALID") {
      this.userService.login(this.form.value).subscribe(
        (data: any) => {
          if (data.key) {
            sessionStorage.setItem("token", data.key);
            sessionStorage.setItem("username", this.form.value.username)
            this.getUsers();

          } else {
            this.userService.Warning("try again");
          }
        }, (error) => {
          if (error.error.non_field_errors != null) {
            this.userService.Warning(error.error.non_field_errors[0]);
          } else if (error.error.email[0] != null) {
            this.userService.Warning(error.error.non_field_errors[0]);
          }
        }
      )
    } else {
      this.userService.Warning("try again");

    }
  }


  getUsers() {
    this.userService.user().subscribe(
      (data: any) => {
        sessionStorage.setItem("allUser", JSON.stringify(data))
        data.forEach(element => {
          if (element.username == sessionStorage.getItem("username")) {
            sessionStorage.setItem("pk", element.pk);
            sessionStorage.setItem("user", JSON.stringify(element));
            this.route.navigate(['/task-pending']);
          }
        });
      });
  }



}
