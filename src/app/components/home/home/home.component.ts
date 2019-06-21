import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private home: boolean;
  private televisions: boolean;
  private all: boolean;
  private smartphones: boolean;

  constructor() {
    this.home = true;
    this.televisions = false;
    this.all = false;
    this.smartphones = false;
    
  }

  ngOnInit() {
  }

  showSection(sectionName: string) {
    console.log(sectionName)
    if (sectionName == 'todos') {
      this.all = true;
      this.home = false;
    }
  }

}
