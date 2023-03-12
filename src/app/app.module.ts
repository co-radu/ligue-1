import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarResultsComponent } from './calendar-results/calendar-results.component';
import { HomeComponent } from './home/home.component';
import { StandingsComponent } from './standings/standings.component';


@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    CalendarResultsComponent,
    HomeComponent
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
