import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskOverduePage } from './task-overdue.page';

const routes: Routes = [
  {
    path: '',
    component: TaskOverduePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskOverduePageRoutingModule {}
