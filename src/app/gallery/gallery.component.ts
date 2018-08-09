import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class Gallery implements OnInit {
  set = {};
  modalDisplay = 'none';
  readonly line = [
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
    {layout: 'v', id: '2', class: 'class', src: 'assets/products/2.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
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
    {layout: 'h', id: '4', class: 'class', src: 'assets/products/4.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg'
    ]},
    {layout: 'v', id: '5', class: 'class', src: 'assets/products/5.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/5.jpg',
      'assets/products/5.jpg',
      'assets/products/5.jpg',
      'assets/products/5.jpg',
      'assets/products/5.jpg',
      'assets/products/5.jpg'
    ]},
    {layout: 'v', id: '6', class: 'class', src: 'assets/products/6.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/6.jpg',
      'assets/products/6.jpg',
      'assets/products/6.jpg',
      'assets/products/6.jpg',
      'assets/products/6.jpg',
      'assets/products/6.jpg'
    ]}
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  showModal(id: string) {
    for (let image in this.line) {
       let target = this.line[image];
       if (target.id == id) {
         this.set = target;
         break;
       };
    };
  }
}
