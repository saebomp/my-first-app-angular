import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', attribute style
  //selector: '.app-servers',
  // template: '<app-server></app-server>',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Testserver';
  serverCreated = false;

  constructor() { 
    setTimeout (()=> {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!' + this.serverName;
  }
  onUpdateServerName(event : Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
