import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() Title:string;
  @Output() Recargar = new EventEmitter<boolean>();
 
  constructor() { }

  ngOnInit() {}

  recargar(){
    this.Recargar.emit(true);
  }

}
