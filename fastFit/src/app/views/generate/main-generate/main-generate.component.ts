import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { outfitIMG } from 'src/app/models/basicUser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-generate',
  templateUrl: './main-generate.component.html',
  styleUrls: ['./main-generate.component.css']
})
export class MainGenerateComponent implements OnInit {

  constructor(private dataService:DataService, public router: Router) { }

  ngOnInit(): void {
  }

  formality: number = 0;
  weather: number = 0;

  userData = JSON.parse(localStorage.getItem("currentUser")|| '{}');
  dataIMG: outfitIMG[] = [];

  generateOtds(){
    if(this.formality == 0 || this.weather == 0){
      alert("Please select one radiobutton.")
    }else{
      this.dataService.getOutfitIMG(1, this.formality, this.weather).subscribe({
        next:(res)=>{
          this.dataIMG = res;
          this.setData();
          this.router.navigate(['topFive']);
        },
        error:(err)=>{
          alert("Error while fetching data.");
        }
      });
    }
  }
  
  setData(){
    console.log(this.dataIMG);
    this.dataService.sharedData = this.dataIMG;
  }

}
