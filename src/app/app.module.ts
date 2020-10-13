import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { CalendarResultsComponent } from './calendar-results/calendar-results.component';


@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    CalendarResultsComponent
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
