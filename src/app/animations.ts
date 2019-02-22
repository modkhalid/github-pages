
import { trigger, transition, style, animate, state, animation, keyframes, useAnimation , query, animateChild, group} from '@angular/animations';

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



export let UseFadeIn = animation([
  style({
    backgroundColor: 'red',
    opacity: 1
  }),
  animate('{{duration}} {{delay}}', keyframes([
    style({
      offset: 0.2,
      opacity: 0.5,
      transform: 'translateX(-20px)'
    }),
    style({
      offset: 1,
      opacity: 1,
      transform: 'translateX(-100%)'
    })
  ]))
], {
  params: {
    duration: '1s',
    delay: '0.5s'
  }
});


export let UseFadeout = animation([
  style({
    opacity: 0,
    backgroundColor: 'yellow'
  }),
  animate(200),

]);


export let fadeIn = trigger('fadeIn', [
  transition(':leave', [
    useAnimation(UseFadeIn, {params: {duration: '1s'}})
  ]),
  transition(':enter', useAnimation(UseFadeout))
]);

export let fade = trigger('fade', [

  // state('void', style({
  //   opacity: 0
  // })),

  transition(':enter', [
    group([
      query('h1', [
        style({
          transform: 'translateY(-20px)'
        }),
        animate(1000)
      ]),
      query('@fadeIn', animateChild())
    ])
    // useAnimation(UseFadeIn)
  ]),
]);



