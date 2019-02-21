import { trigger, transition, style, animate, state } from '@angular/animations';
export let fade = trigger('fade', [
  transition('void=>*', [
    style({
      backgroundColor: 'red',
      opacity: 0
    }),
    animate(2000)
  ]),
  transition('*=>void', [
    style({
      backgroundColor: 'yellow',
      opacity: 1
    }),
    animate(2000, style({
      backgroundColor: 'white',
      opacity: 0
    }))
  ]),
]);

