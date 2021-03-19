import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { AddTaskFormComponent } from 'src/app/components/add-task-form/add-task-form.component';

@Component({
  selector: 'app-task-pending',
  templateUrl: './task-pending.page.html',
  styleUrls: ['./task-pending.page.scss'],
})
export class TaskPendingPage implements OnInit, OnDestroy {

  private Subscription: Subscription;

  public PendingTaks = [];
  User;
  username;
  order:boolean;
  constructor(private userService: UserService, private taskService: TaskService,private popoverController:PopoverController) { }

  ngOnInit() {
    this.order= false;
    this.getAllTask();
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }


  getAllTask() {
    this.PendingTaks = [];
    this.Subscription = this.taskService.getAllTask().subscribe(
      (data: any) => {
        data.forEach(element => {
          if (element.status == "pending")
            this.PendingTaks.push(element);
        });
      });
  }

  getName(id) {
    this.User = JSON.parse(sessionStorage.getItem("allUser"));
    this.User.forEach(element => {
      if (element.pk == id)
        this.username = element.username
    });
    return this.username;
  }
  

  async OpenForm() {
    const popover = await this.popoverController.create({
      component: AddTaskFormComponent,
      cssClass: 'my-custom-class',
      translucent: true
    });
    await popover.present();
    const { data } = await popover.onDidDismiss();
    if (data != null || data != undefined) {
      this.getAllTask();
    }
  }

  Recargar(){
    this.ngOnInit()
  }

  Order() {
    this.order = !this.order;
    if (this.order) {
      this.PendingTaks = this.userService.orderbyPriorityLowertohigher(this.PendingTaks);
    } else {
      this.PendingTaks = this.userService.orderbyPriorityhighertoLower(this.PendingTaks);
    }
  }
}
