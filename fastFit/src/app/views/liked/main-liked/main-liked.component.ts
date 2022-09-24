import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-liked',
  templateUrl: './main-liked.component.html',
  styleUrls: ['./main-liked.component.css']
})
export class MainLikedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Card View Demo';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}
