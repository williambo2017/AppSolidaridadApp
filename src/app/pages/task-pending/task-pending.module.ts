import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPendingPageRoutingModule } from './task-pending-routing.module';

import { TaskPendingPage } from './task-pending.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPendingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TaskPendingPage]
})
export class TaskPendingPageModule {}
