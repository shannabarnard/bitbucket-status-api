import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IncidentsComponent } from './incidents/incidents.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'incidents', component: IncidentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
