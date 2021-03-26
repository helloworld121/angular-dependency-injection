import {Component, OnInit, Optional, Self} from '@angular/core';
import {Logger4OptionalService} from './logger4optional.service';
import {Logger4SelfService} from './logger4self.service';

@Component({
  selector: 'app-resolution-modifiers',
  templateUrl: './resolution-modifiers.component.html',
  styleUrls: ['./resolution-modifiers.component.css'],
  providers: [Logger4SelfService] // necessary for @Self()
})
export class ResolutionModifiersComponent implements OnInit {

  // @Optional => if the service is not provided the NullInjector will throw an exception
  //   => @Optional avoids this and so the application from crashing
  // @Self => only tries to resolve the dependency in its own injector
  //   => so if we inject the service in the AppModule it will find it,
  //      because this points to the root-injector where all services are
  //   => ATTENTION: if we use @Component({providers:...})
  //      the service instance found in the Component is not the same as in the Root Injector (for example AppModule)
  constructor(
    @Optional() private logger4Optional: Logger4OptionalService,
    @Self() private logger4Self: Logger4SelfService) {

    // check @Optional()
    if (this.logger4Optional) {
      this.logger4Optional.log('@Optional() => Hello World!');
    }

    // check @Self()
    if (this.logger4Self) {
      this.logger4Self.log('@Self() => Hello World!');
    }
  }

  ngOnInit(): void {
  }

}
