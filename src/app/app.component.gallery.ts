import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gallery',
  templateUrl: './app.component.gallery.html',
  styleUrls: ['./app.component.gallery.css'],
})
export class Gallery implements OnInit {
  set: string[];
  readonly line = [
    {
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
    {id: '2', class: 'class', src: 'assets/products/2.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/2.jpg',
      'assets/products/2.jpg',
      'assets/products/2.jpg',
      'assets/products/2.jpg',
      'assets/products/2.jpg',
      'assets/products/2.jpg'
    ]},
    {id: '3', class: 'class', src: 'assets/products/3.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/3.jpg',
      'assets/products/3.jpg',
      'assets/products/3.jpg',
      'assets/products/3.jpg',
      'assets/products/3.jpg',
      'assets/products/3.jpg'
    ]},
    {id: '4', class: 'class', src: 'assets/products/4.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg',
      'assets/products/4.jpg'
    ]},
    {id: '5', class: 'class', src: 'assets/products/5.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/5.jpg',
      'assets/products/5.jpg',
      'assets/products/5.jpg',
      'assets/products/5.jpg',
      'assets/products/5.jpg',
      'assets/products/5.jpg'
    ]},
    {id: '6', class: 'class', src: 'assets/products/6.jpg', title: 'I M THE TITLE', discription: 'fdsafasfcasdfzxewjahfjkcsnkjebfckbkhJSDGfahk', sub: [
      'assets/products/6.jpg',
      'assets/products/6.jpg',
      'assets/products/6.jpg',
      'assets/products/6.jpg',
      'assets/products/6.jpg',
      'assets/products/6.jpg'
    ]}
  ];

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  showModal(id: string) {
    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById("img01");
    let descriptionText = document.getElementById("description");
    let titleText = document.getElementById("title");

    for (let image in this.line) {
       let target = this.line[image];
       if (target.id == id) { this.set = target.sub};
       descriptionText.innerHTML = target.discription;
       titleText.innerHTML = target.title;
    };
    modal.style.display = "block";
  }

  closeImg() {
     document.getElementById('myModal').style.display = "none";
  }
}
