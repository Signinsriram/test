import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  details=[{name:'leo',hero:'vijay',director:'lokesh'},
           {name:'sura',hero:'vijay',director:'suraj'},
           {name:'jailer',hero:'rajini',director:'nelson'}];

           
}
