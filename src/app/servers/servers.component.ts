import { Component } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowAddNewServer = false;
  wasServerCreated = 'Server was not created';
  serverName = '';
  userName = '';
  serverCreated = false;
  canClickReset = false;
  servers = ['testServer', 'testServer 2'];
  details = [];
  showDetails = false;
constructor(){
  setTimeout(() => {
    this.allowAddNewServer = true;
  }, 2000);
}

onClickAddNewServer(){
  this.servers.push(this.serverName);
  this.serverCreated = true;
  this.wasServerCreated = 'New Server Was Created!' + 'Server Name: ' + this.serverName;
}

onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
}
onClickReset(){
  this.userName = '';
}
onClickDetails(){
  const dateTime = new Date();
  this.details.push(dateTime.toUTCString());
  this.showDetails = true;
}
}
