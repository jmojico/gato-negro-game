import barba from '@barba/core';
import barbaCss from '@barba/css';

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
    name: 'fade',
    to: {
      namespace: ['fade'],
    },
    leave() {},
    enter() {},
  },
  ],
});