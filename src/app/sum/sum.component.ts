import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";


@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css'],
  providers : [HomeService]
})
export class SumComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number | undefined;
  done: boolean = false;


  constructor(private humeService: HomeService){}

  submit(){
    this.humeService.getSum(this.num1, this.num2).subscribe((data:any) => {
      this.sum=data
      this.done=true;
    });

  }

}
