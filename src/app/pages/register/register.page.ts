import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, MinLengthValidator, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public form: FormGroup
  pattern = "[0-9]{1,9}(\.[0-9]{0,2})?$";
  user: string;
  email: string;
  password: string


  constructor(private route: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password1: [null, Validators.required],
      password2: [null, Validators.required],
    });
  }

  Register() {
    const regex = /^[0-9]*$/;
    if ((this.form.value.password1 == this.form.value.password2)) {
      const onlyNumbers = regex.test(this.form.value.password1); // true
      if (onlyNumbers) {
        console.log("Cadena de solo numeros");
        this.userService.Warning("The password can't only numbers");

      } else {
        this.userService.Register(this.form.value).subscribe(
          (Data: any) => {
            if (Data.key) {
              this.route.navigate(["/login"]);
            }
          },
          (error) => {
            this.userService.Warning(error.error);
          });
      }
    } else {
      this.userService.Warning("Passwords do not match");
    }
  }

}
