import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class Home implements OnInit {
  set = {};
  readonly highLights = [
    {
      layout: 'v',
      id: '1',
      class: 'class',
      src: 'assets/products/1.jpg',
      title: 'I M THE TITLE',
      discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahkfdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahkfdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahkfdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahkfdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahkfdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahkfdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk',
      sub: [
        'assets/products/1.jpg',
        'assets/products/1.jpg',
        'assets/products/1.jpg',
        'assets/products/1.jpg',
        'assets/products/1.jpg',
        'assets/products/1.jpg'
      ]
    },
    {layout: 'h', id: '2', class: 'class', src: 'assets/products/2.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/2.jpg',
      'assets/products/2.jpg',
      'assets/products/2.jpg',
      'assets/products/2.jpg',
      'assets/products/2.jpg',
      'assets/products/2.jpg'
    ]},
    {layout: 'h', id: '3', class: 'class', src: 'assets/products/3.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/3.jpg',
      'assets/products/3.jpg',
      'assets/products/3.jpg',
      'assets/products/3.jpg',
      'assets/products/3.jpg',
      'assets/products/3.jpg'
    ]},
    {layout: 'v', id: '4', class: 'class', src: 'assets/products/4.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg'
    ]}
  ];

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  extend(id: string) {
    document.getElementById(id).style.width = "68%";
    /*if (id != "5") {
      document.getElementById("5").style.width = "5%";
    };*/
  }

  fold(id: string) {
    if (id != '5') {
      document.getElementById(id).style.width = "10%";
    };
  }

  showModal(id: string) {
    for (let index in this.highLights) {
      let target = this.highLights[index];
      if (target.id == id) {
        this.set = target;
        break;
      }
    }
  }
}
