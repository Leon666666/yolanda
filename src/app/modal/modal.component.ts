import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class Modal implements OnChanges {
  @Input('set') set: any;
  @Input('modalDisplay') modalDisplay: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.set.firstChange) {
      this.modalDisplay = 'block';
    }
  }

  closeImg() {
    this.modalDisplay = 'none';
  }
}
