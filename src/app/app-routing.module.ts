import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full'},
  { path: 'first', component: FirstComponent},
  //{ path: 'second', component: SecondComponent},
  { path: 'second/:id', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
