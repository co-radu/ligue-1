import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Component } from '@angular/core';
registerLocaleData(localeFr, 'fr');

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
