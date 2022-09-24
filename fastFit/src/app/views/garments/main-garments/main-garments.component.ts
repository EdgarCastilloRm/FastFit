import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-garments',
  templateUrl: './main-garments.component.html',
  styleUrls: ['./main-garments.component.css']
})
export class MainGarmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeClient(value: string){
      console.log(value);
  }

}
