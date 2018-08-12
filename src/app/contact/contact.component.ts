import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class Contact implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
