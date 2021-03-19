import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskFinishedPageRoutingModule } from './task-finished-routing.module';

import { TaskFinishedPage } from './task-finished.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskFinishedPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TaskFinishedPage]
})
export class TaskFinishedPageModule {}
