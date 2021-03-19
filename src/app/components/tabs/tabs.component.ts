import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {}

  Navegar(Destino){
    this.route.navigate([Destino]);
  }

}
