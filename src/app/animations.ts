import { trigger, transition, style, animate, state, animation, keyframes, useAnimation } from '@angular/animations';

/*
 animation fun create animation which can be use by any trigger>transition(':enter',[
    style({
      do sometihng here
    })
    useAnimation(bounceAnimation)
  ])
*/
export let bounceAnimation = animation(
  animate('.5s 0.5s ease-out', keyframes([
    style({
      offset: .2,
      opacity: 1,
      transform: 'translateX(20px)'
    }),
    style({
      offset: 1,
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
  ]))
);
export let fade = trigger('fade', [

  state('void', style({
    opacity: 0
  })),

  /*transition('void=>*', [
    style({
      backgroundColor: 'red',
      // opacity: 0
    }),
    animate(2000)
  ]),*/


  transition('*=>void', [
    style({
      backgroundColor: 'yellow',
      opacity: 1
    }),
    animate(500),
    useAnimation(bounceAnimation)
  ]),
]);


