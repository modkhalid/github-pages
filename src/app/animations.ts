import { trigger, transition, style, animate, state } from '@angular/animations';
export let fade = trigger('animation_name', [
    state('void', style({opacity: 0})),
    // transition('void=>*', [
    //   style({backgroundColor: 'red'}),
    //   animate(2000)
    // ]),
    // transition('*=>void', [
    //   animate(2000)
    // ])
    // transition('void<=>*', [
    //   animate(2000)
    // ])
    transition(':enter,:leave', [
      animate(2000)
    ])
  ]);
