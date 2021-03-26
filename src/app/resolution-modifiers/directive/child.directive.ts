import {Directive, Host} from '@angular/core';
import {Logger4HostService} from '../logger4host.service';

@Directive({
  selector: '[appChild]',
  // providers: [Logger4HostService]
})
export class ChildDirective {

  // @Host() => tells Angular, that the "host" element should be the last stop when it is searching for providers
  //    => every Angular component has its own Host-Element and it is represented by the component's selector
  // => @Host() checks it's own element injector and the parent
  constructor(@Host() private logger4HostService: Logger4HostService) {
    this.logger4HostService.log('Hello World');
  }

}
