import barba from '@barba/core';
import barbaCss from '@barba/css';
import seq1 from './sequences/seq1';
import seq2 from './sequences/seq2';
import seq3 from './sequences/seq3';
import seq4 from './sequences/seq4';
import seq5 from './sequences/seq5';
import seq6 from './sequences/seq6';
import seq7 from './sequences/seq7';
import seq8 from './sequences/seq8';
import seq9 from './sequences/seq9';
import seq10 from './sequences/seq10';
import seq11 from './sequences/seq11';
import seq12 from './sequences/seq12';
import seq13 from './sequences/seq13';
import seq14 from './sequences/seq14';


barba.use(barbaCss);
const body = document.querySelector('body');

barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  console.log(background);
  body.style.setProperty('--page-background', background);
});

barba.init({
  transitions: [{
    name: 'home'
  },
  {
    name: 'seq1',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq2',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq3',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq4',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq5',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq6',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq7',
    leave() {},
    enter() {
    },
    afterEnter(){
    }
  },
  {
    name: 'seq8',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq9',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq10',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq11',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq12',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq13',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  {
    name: 'seq14',
    leave() {},
    enter() {},
    afterEnter(){
    }
  },
  ],
  views: [seq1,seq2,seq3,seq4,seq5,seq6,seq7,seq8,seq9,seq10,seq11,seq12,seq13,seq14]
});

