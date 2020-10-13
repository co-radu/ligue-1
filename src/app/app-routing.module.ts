import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarResultsComponent } from './calendar-results/calendar-results.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: 'ranking', component: RankingComponent },
  { path: 'calendar_results', component: CalendarResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
