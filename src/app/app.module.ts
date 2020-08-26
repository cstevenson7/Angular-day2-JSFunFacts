import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsFunFactsHomeComponent } from './js-fun-facts-home/js-fun-facts-home.component';
import { JsFunFactsPromisesComponent } from './js-fun-facts-promises/js-fun-facts-promises.component';
import { JsFunFactsCallbacksComponent } from './js-fun-facts-callbacks/js-fun-facts-callbacks.component';
import { JsFunFactsMapComponent } from './js-fun-facts-map/js-fun-facts-map.component';
import { JsFunFactsCreatorComponent } from './js-fun-facts-creator/js-fun-facts-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    JsFunFactsHomeComponent,
    JsFunFactsPromisesComponent,
    JsFunFactsCallbacksComponent,
    JsFunFactsMapComponent,
    JsFunFactsCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
