import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';
import {Logger4SelfService} from './resolution-modifiers/logger4self.service';

@NgModule({
  declarations: [
    AppComponent,
    ResolutionModifiersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private logger4Self: Logger4SelfService) {
    logger4Self.log('Hello from AppModule');
  }

}
