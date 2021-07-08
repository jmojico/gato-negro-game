import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss);
console.log("HGO")
const body = document.querySelector('body');

barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  console.log(background);
  body.style.setProperty('--page-background', background);
});

barba.init({
  views: [{
    namespace: 'wrapper',
    beforeEnter() {
      // update the menu based on user navigation
      menu.update();
    },
    afterEnter() {
      // refresh the parallax based on new page content
      console.log("asdasdasdad")
    }
  }],
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
  },
  ],
});

