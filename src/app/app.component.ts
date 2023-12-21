import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  year=0;


  li=["raj","raw"];
  list1:String[]=[];
  newItem: string = "";

  addToList1(item: string) {
    this.list1.push(item);
    this.newItem = "";

  }
  
   gender=true;
   

     num=0;


     name="when you have pen";
     srm="when you have watch";
     
     na="when you have pen";

     today = new Date();


     
     price: number = 1000;

     

     






}