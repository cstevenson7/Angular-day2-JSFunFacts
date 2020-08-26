import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsFunFactsHomeComponent } from './js-fun-facts-home/js-fun-facts-home.component';
import { JsFunFactsCallbacksComponent } from './js-fun-facts-callbacks/js-fun-facts-callbacks.component';
import { JsFunFactsCreatorComponent } from './js-fun-facts-creator/js-fun-facts-creator.component';
import { JsFunFactsMapComponent } from './js-fun-facts-map/js-fun-facts-map.component';
import { JsFunFactsPromisesComponent } from './js-fun-facts-promises/js-fun-facts-promises.component';

const routes: Routes = [
{
  path:'home', component:JsFunFactsHomeComponent
},
{
  path:'callbacks', component:JsFunFactsCallbacksComponent
},
{
  path:'creator', component:JsFunFactsCreatorComponent
},
{
  path:'map', component:JsFunFactsMapComponent
},
{
  path:'promises', component:JsFunFactsPromisesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
