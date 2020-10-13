import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public windowWidth: number = window.innerWidth;
	public mobileSidenavIsOpened: boolean = false;

	constructor(
		private router: Router,
	) { }

	redirectTo(destination: string): void {
		switch (destination) {
			case 'lfp':
				window.open('https://www.lfp.fr/fr-FR', '_blank');
				break;
			case 'fff':
				window.open('https://www.fff.fr/?home', '_blank');
				break;
			case 'linkedin':
				window.open('https://linkedin.com/in/corentin-radureau-93289a139', '_blank');
				break;
			case 'github':
				window.open('https://github.com/co-radu', '_blank');
				break;
			case 'home':
				this.router.navigate(['']);
				break;
			case 'ranking':
				this.router.navigate(['/ranking']);
				break;
			case 'calendar_results':
				this.router.navigate(['/calendar_results']);
				break;
		}
		if (this.mobileSidenavIsOpened === true) {
			this.mobileSidenavIsOpened = false;
		}
	}

	onResize(event): void {
		this.windowWidth = event.target.innerWidth;
	}

	openMobileSidenav(): void {
		this.mobileSidenavIsOpened = true;
	}

	closeMobileSidenav(): void {
		this.mobileSidenavIsOpened = false;
	}
}
