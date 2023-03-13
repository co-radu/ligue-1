import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarResultsComponent } from './calendar-results/calendar-results.component';
import { HomeComponent } from './home/home.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
  { path: 'standings', component: StandingsComponent },
  { path: 'matches', component: CalendarResultsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
