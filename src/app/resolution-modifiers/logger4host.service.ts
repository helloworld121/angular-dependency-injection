import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger4HostService {

  // the lastMessage is to keep a state in the service and prove to have different instances
  private lastMessage: string = null;
  constructor() { }

  log(message: string): void {
    console.log(`[Logger4HostService] [${message}] => last: [${this.lastMessage}]`);
    this.lastMessage = message;
  }

}
