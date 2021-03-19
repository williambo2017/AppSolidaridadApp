import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    AddTaskFormComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ], exports: [
    HeaderComponent,
    TabsComponent,
    AddTaskFormComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
