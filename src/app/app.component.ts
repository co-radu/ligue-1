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
      case 'Linkedin':
        window.open('https://linkedin.com/in/corentin-radureau-93289a139', '_blank');
        break;
      case 'Github':
        window.open('https://github.com/co-radu', '_blank');
        break;
      case 'Accueil':
        this.router.navigate(['']);
        break;
      case 'Classement':
        this.router.navigate(['/ranking']);
        break;
    }
  }
}
