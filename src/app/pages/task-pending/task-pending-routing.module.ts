import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskPendingPage } from './task-pending.page';

const routes: Routes = [
  {
    path: '',
    component: TaskPendingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskPendingPageRoutingModule {}
