import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { fade, flyIn } from './app.animation';


@Component({
  selector: 'show-case',
  templateUrl: './app.component.showCase.html',
  styleUrls: ['./app.component.showCase.css'],
  animations: [
    fade,
    flyIn
  ]
})
export class ShowCase {
  title = 'dasdasdsad';
  state = 'show';
  show = true;

  constructor(private router: Router) {

  }

  OnInit() {}

  change() {
    this.state = this.state == 'void'? 'show':'void';
    this.show = this.state == 'void'? false:true;
  }

  goHome() {
    this.router.navigateByUrl('home');
  }
}
