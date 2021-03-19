import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() taksId: string;
  @Input() userId: string;
  @Input() Title: string;
  @Input() status: string;
  @Input() overdue: string;
  @Input() priority: string;
  @Output() Recargar = new EventEmitter<boolean>();
  username: string;

  constructor(private user: UserService, private task: TaskService) { }

  ngOnInit() {
    
  }





  Finishtask(id) {
    this.task.Finishtask(id).subscribe(
      (data: any) => {
        if (data.pk == id) {
          this.Recargar.emit(true);
        }
      });
  }

  Overduetask(id) {
    this.task.Overduetask(id).subscribe(
      (data: any) => {
        if (data.pk == id) {

          this.Recargar.emit(true);
        }
      });
  }

  DeleteTask(id) {
    this.task.DeleteTask(id).subscribe(
      (data: any) => {
        if (data == null || data != " ") {
          this.Recargar.emit(true);
        }
      });
  }

}
