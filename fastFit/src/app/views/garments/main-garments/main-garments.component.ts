import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { garmentIMG } from 'src/app/models/basicUser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-garments',
  templateUrl: './main-garments.component.html',
  styleUrls: ['./main-garments.component.css']
})
export class MainGarmentsComponent implements OnInit {

  constructor(private dataService:DataService, public router: Router) { }

  ngOnInit(): void {
  }

  userData = JSON.parse(localStorage.getItem("currentUser")|| '{}');
  dataIMG: garmentIMG[] = [];

  changeClient($event:any){
    this.dataService.getGarmentIMG(1, $event.value).subscribe({
      next:(res)=>{
        this.dataIMG = res;
      },
      error:(err)=>{
        alert("Error while fetching data.");
      }
    });
  }

}
