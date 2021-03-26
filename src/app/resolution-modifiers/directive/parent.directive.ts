import {Directive, Optional, Self} from '@angular/core';
import {Logger4HostService} from '../logger4host.service';

@Directive({
  selector: '[appParent]',
  providers: [Logger4HostService]
})
export class ParentDirective {

  constructor(private logger4HostService: Logger4HostService) {
    if (this.logger4HostService) {
      this.logger4HostService.log('ParentDirective: Hello World');
    }
  }

}
