import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  atHome = true;
  atGallery = false;
  atContact = false;

  constructor(private router: Router) {}

  goGallery() {
    this.router.navigateByUrl('gallery');
    this.atHome = false;
    this.atGallery = true;
    this.atContact = false;
  }

  goHome() {
    this.router.navigateByUrl('home');
    this.atHome = true;
    this.atGallery = false;
    this.atContact = false;
  }

  goContact() {
    this.router.navigateByUrl('contact');
    this.atHome = false;
    this.atGallery = false;
    this.atContact = true;
  }
}
