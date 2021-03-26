import {Component, OnInit, Optional} from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-resolution-modifiers',
  templateUrl: './resolution-modifiers.component.html',
  styleUrls: ['./resolution-modifiers.component.css']
})
export class ResolutionModifiersComponent implements OnInit {

  // @Optional => if the service is not provided the NullInjector will throw an exception
  //   => @Optional avoids this and so the application from crashing
  constructor(@Optional() private logger: LoggerService) {
    if (this.logger) {
      this.logger.log('Hello World!');
    }
  }

  ngOnInit(): void {
  }

}
