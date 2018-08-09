import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class Modal implements OnChanges {
  @Input('set') set: any;
  hWidth = '30%';
  modalDisplay = {
    v: 'none',
    h: 'none'
  };

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.set.firstChange) {
      if (changes.set.currentValue.layout == 'v') {
        this.modalDisplay.v = 'block';
        return;
      };
      let width = Math.round(100 / changes.set.currentValue.sub.length) - 1;
      this.hWidth = String(width) + '%';
      this.modalDisplay.h = 'block';
    }
  }

  closeImg() {
    this.modalDisplay.v = 'none';
    this.modalDisplay.h = 'none';
  }
}
