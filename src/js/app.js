import barba from '@barba/core';
import barbaCss from '@barba/css';
import { seq1 } from './sequences/seq1';

barba.use(barbaCss);
const body = document.querySelector('body');

barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  console.log(background);
  body.style.setProperty('--page-background', background);
});

barba.init({
  transitions: [{
    name: 'home',
    beforeOnce() {

    },
    once() {

    },
    afterOnce() {

    },
  },
  {
    name: 'seq1',
    to: {
      namespace: ['seq1'],
    },
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  ],
  views: [seq1]
});

