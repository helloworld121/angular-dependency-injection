import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';

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
export class AppModule { }
