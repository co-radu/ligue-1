import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarResultsComponent } from './calendar-results/calendar-results.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MatchesListComponent } from './shared/components/matches-list/matches-list.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { StandingsComponent } from './shared/components/standings/standings.component';
import { StandingsFormColorsPipe } from './shared/pipes/standings-colors/standings-form-colors.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CalendarResultsComponent,
    HomeComponent,
    LayoutComponent,
    MatchesListComponent,
    LoaderComponent,
    StandingsComponent,
    StandingsFormColorsPipe
  ],
  imports: [
    BrowserModule,
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
