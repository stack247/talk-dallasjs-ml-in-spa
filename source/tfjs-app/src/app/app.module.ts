import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MnistComponent } from './mnist/mnist.component';
import { DrawableDirective } from './mnist/drawable.directive';

@NgModule({
  declarations: [
    AppComponent,
    MnistComponent,
    DrawableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
