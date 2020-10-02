import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
			case 'accueil':
				this.router.navigate(['']);
				break;
			case 'classement':
				this.router.navigate(['/ranking']);
				break;
		}
	}
}
