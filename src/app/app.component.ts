import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  boxes: any[] = [];
  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.boxes.push({
        className: `box${i + 1}`
      });
    }
  }
}
