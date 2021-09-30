import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-addtwohours',
  templateUrl: './addtwohours.component.html',
  styleUrls: ['./addtwohours.component.css']
})
export class AddtwohoursComponent{

  hour: string = "";
  date: string = "";
  result: string | undefined;
  done: boolean = false;


  constructor(private humeService: HomeService){}

  submit(){
    console.log(this.hour)
    console.log(this.date +" " +this.hour)
    this.humeService.addTwoHours(this.date +" " +this.hour).subscribe((data:any) => {
      this.result=data
      this.done=true;
    });

  }


}
