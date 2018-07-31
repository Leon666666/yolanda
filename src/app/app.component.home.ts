import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './app.component.home.html',
  styleUrls: ['./app.component.home.css'],
})
export class Home implements OnInit {
  readonly highLights = [
    {id: '1', src: 'assets/products/1.jpg'},
    {id: '2', src: 'assets/products/2.jpg'},
    {id: '3', src: 'assets/products/3.jpg'},
    {id: '4', src: 'assets/products/4.jpg'}
  ];

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  extend(id: string) {
    document.getElementById(id).style.width = "80%";
    /*if (id != "5") {
      document.getElementById("5").style.width = "5%";
    };*/
  }

  fold(id: string) {
    if (id != '5') {
      document.getElementById(id).style.width = "5%";
    };
  }

}
