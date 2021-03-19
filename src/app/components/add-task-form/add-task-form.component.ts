import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent implements OnInit {

  user: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private popoverController: PopoverController,private userService:UserService) { }

  ngOnInit() {
    this.user = sessionStorage.getItem("pk");
    this.form = this.formBuilder.group({
      user: [this.user, Validators.required],
      name: [null, Validators.required],
      status: [null, [Validators.required]],
      due_date: [null, Validators.required],
      priority: [null, Validators.required],
    });

  }


  AddTask() {

    if (this.form.status == "VALID") {

      this.taskService.SetTask(this.form.value).subscribe(
        (data: any) => {
          this.popoverController.dismiss({
            data
          }
          )
        },
        (error) => {
          this.userService.Warning("Try again");
        }
      );

    } else {
    }
  }
}
