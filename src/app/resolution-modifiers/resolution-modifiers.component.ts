import {Component, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {Logger4OptionalService} from './logger4optional.service';
import {Logger4SelfService} from './logger4self.service';
import {Logger4SkipSelfService} from './logger4skipself.service';

@Component({
  selector: 'app-resolution-modifiers',
  templateUrl: './resolution-modifiers.component.html',
  styleUrls: ['./resolution-modifiers.component.css'],
  providers: [
    Logger4SelfService, // necessary for @Self()
    Logger4SkipSelfService, // necessary to show @SkipSelf()
  ]
})
export class ResolutionModifiersComponent implements OnInit {

  // @Optional => if the service is not provided the NullInjector will throw an exception
  //   => @Optional avoids this and so the application from crashing
  // @Self => only tries to resolve the dependency in its own injector
  //   => so if we inject the service in the AppModule it will find it,
  //      because this points to the root-injector where all services are
  //   => ATTENTION: if we use @Component({providers:...})
  //      the service instance found in the Component is not the same as in the Root Injector (for example AppModule)
  // @SkipSelf() => this service does the opposite of @Self()
  //   => it checks in the parent injector
  constructor(
    @Optional() private logger4Optional: Logger4OptionalService,
    @Self() private logger4Self: Logger4SelfService,
    @SkipSelf() private logger4SkipSelf: Logger4SkipSelfService) {

    // check @Optional()
    if (this.logger4Optional) {
      this.logger4Optional.log('@Optional() => Hello World!');
    }

    // check @Self()
    this.logger4Self.log('@Self() => Hello World!');

    // check @SkipSelf()
    this.logger4SkipSelf.log('@SkipSelf() => Hello World!');
  }

  ngOnInit(): void {
  }

}
