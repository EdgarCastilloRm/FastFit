import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { outfitIMG } from 'src/app/models/basicUser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})
export class TopFiveComponent implements OnInit {

  constructor(private dataService:DataService, public router: Router) { }

  dataIMG:outfitIMG[] = []

  ngOnInit(): void {
    this.dataIMG = this.getData();
  }

  getData(){
    console.log(this.dataService.sharedData)
    return this.dataService.sharedData;
  }

  returnHome(){
    this.router.navigate(['generate']);
  }

  makeFav(num : number){
    this.dataService.putFav(num).subscribe({
      next:(res: string)=>{
        alert("Favorite added.");
      },
      error:()=>{
        alert("Error while fetching data.");
      }
    });
  }

}
