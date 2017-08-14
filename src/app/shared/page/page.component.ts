import { Server } from './../../services/models/server';
import { ServersService } from './../../services/servers.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'srv-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
    console.log('title: ', this.title);
  }

}
