import { Component } from '@angular/core';

@Component ({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
    serverId:number = 10;
    serverStatus:string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}

// decorators (@Component) are a typescript feature which allow you to enhance elements you use your code
