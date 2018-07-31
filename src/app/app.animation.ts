import { trigger, transition, state, animate, style} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({
    width: 0,
    opacity: 0
  })),
  state('show', style({
    opacity: 1})),
  transition('show <=> void', [ animate(1000) ])
]);

export const flyIn =   trigger('flyIn', [
  state('show', style({transform:'translate(0, 0)'})),
  state('void', style({transform:'translate(1500px, 1500px)'})),
  transition('show <=> void', [ animate(1000) ])
]);
