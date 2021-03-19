import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskOverduePageRoutingModule } from './task-overdue-routing.module';

import { TaskOverduePage } from './task-overdue.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskOverduePageRoutingModule,
    ComponentsModule
  ],
  declarations: [TaskOverduePage]
})
export class TaskOverduePageModule {}
