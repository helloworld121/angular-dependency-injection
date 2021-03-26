import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';
import {Logger4SelfService} from './resolution-modifiers/logger4self.service';
import {Logger4SkipSelfService} from './resolution-modifiers/logger4skipself.service';
import { DirectiveParentDirective } from './resolution-modifiers/directive-parent.directive';
import { DirectiveChildDirective } from './resolution-modifiers/directive-child.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResolutionModifiersComponent,
    DirectiveParentDirective,
    DirectiveChildDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private logger4Self: Logger4SelfService,
    private logger4SkipSelf: Logger4SkipSelfService) {

    logger4Self.log('Hello from AppModule');

    logger4SkipSelf.log('Hello from AppModule');
  }

}
