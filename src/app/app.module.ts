import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { MatchesListComponent } from './shared/components/matches-list/matches-list.component';
import { TeamsStandingsComponent } from './shared/components/teams-standings/teams-standings.component';
import { StandingPipe } from './shared/pipes/standing/standing.pipe';
import { StandingsFormColorsPipe } from './shared/pipes/standings-colors/standings-form-colors.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    MatchesListComponent,
    LoaderComponent,
    TeamsStandingsComponent,
    StandingsFormColorsPipe,
    StandingPipe,
    ResultsPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
