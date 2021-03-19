import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, PopoverController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AddTaskFormComponent } from 'src/app/components/add-task-form/add-task-form.component';

import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-task-overdue',
  templateUrl: './task-overdue.page.html',
  styleUrls: ['./task-overdue.page.scss'],
})
export class TaskOverduePage implements OnInit, OnDestroy {

  private Subscription: Subscription;
  OverdueTaks = [];
  User
  username
  order:boolean;
  constructor(private toastController: ToastController,
    private taskService: TaskService,
    private userService: UserService,
    private popoverController: PopoverController,
    private navCtrl: NavController,
    private user:UserService
    ) { }

  ngOnInit() {
    this.order = false;
    // this.presentToast();
    this.getAllTask();
  }
  ngOnDestroy() {
    console.log("Destruir..");
    this.Subscription.unsubscribe();
  }

  getAllTask() {
    this.OverdueTaks = [];
    this.Subscription = this.taskService.getAllTask().subscribe(
      (data: any) => {
        data.forEach(element => {
          if (element.status == "overdue")
            this.OverdueTaks.push(element);
        });
        this.OverdueTaks = this.userService.orderbyPriorityLowertohigher(this.OverdueTaks);
      });
  }

  Recargar() {
    this.ngOnInit();
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

  getName(id) {
    this.User = JSON.parse(sessionStorage.getItem("allUser"));
    this.User.forEach(element => {
      if (element.pk == id)
        this.username = element.username
    });
    return this.username;
  }

  Order() {
    this.order = !this.order;
    if (this.order) {
      this.OverdueTaks = this.user.orderbyPriorityLowertohigher(this.OverdueTaks);
    } else {
      this.OverdueTaks = this.user.orderbyPriorityhighertoLower(this.OverdueTaks);
    }
  }




}
