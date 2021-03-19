import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddTaskFormComponent } from 'src/app/components/add-task-form/add-task-form.component';
import { TaskService } from 'src/app/services/task.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-task-finished',
  templateUrl: './task-finished.page.html',
  styleUrls: ['./task-finished.page.scss'],
})
export class TaskFinishedPage implements OnInit, OnDestroy {
  private Subscription: Subscription;
  private SubscriptionUser: Subscription;


  public finishTaks = [];
  username;
  User;
  order: boolean;

  constructor(private user: UserService, private popoverController: PopoverController, private taskService: TaskService) { }

  ngOnInit() {
    this.order = false;
    this.getAllTask();
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  getAllTask() {
    this.finishTaks = [];
    this.Subscription = this.taskService.getAllTask().subscribe(
      (data: any) => {
        data.forEach(element => {
          if (element.status == "finished")
            this.finishTaks.push(element);
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
  Recargar() {
    this.ngOnInit()
  }
  Order() {
    this.order = !this.order;
    if (this.order) {
      this.finishTaks = this.user.orderbyPriorityLowertohigher(this.finishTaks);
    } else {
      this.finishTaks = this.user.orderbyPriorityhighertoLower(this.finishTaks);
    }
  }

}
