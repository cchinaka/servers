import { ServersService } from './../../services/servers.service';
import { Server } from './../../services/models/server';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'srv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  server: Server;

  constructor(private serverService: ServersService) {
  }

  ngOnInit() {
    this.serverService.findServerInfo()
      .subscribe(data => {
        this.server = data;
      });
  }

}
