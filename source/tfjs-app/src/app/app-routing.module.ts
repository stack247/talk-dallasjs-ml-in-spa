import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MnistComponent } from './mnist/mnist.component';


const routes: Routes = [
  {
    path: 'mnist',
    component: MnistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
