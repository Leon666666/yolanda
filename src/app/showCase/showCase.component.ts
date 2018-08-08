import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'show-case',
  templateUrl: './showCase.component.html',
  styleUrls: ['./showCase.component.css'],
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
