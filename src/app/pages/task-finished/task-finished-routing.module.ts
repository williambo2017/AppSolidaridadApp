import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskFinishedPage } from './task-finished.page';

const routes: Routes = [
  {
    path: '',
    component: TaskFinishedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskFinishedPageRoutingModule {}
