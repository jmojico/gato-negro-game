import barba from '@barba/core';
import barbaCss from '@barba/css';
import seq1 from './sequences/seq1';
import seq1Audio from './sequences/seq1-audio';
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
    name: 'home',
  },
  {
    name: 'seq1',
  },
  {
    name: 'seq1-audio',
  },
  {
    name: 'seq2',
  },
  {
    name: 'seq3',
  },
  {
    name: 'seq4',
  },
  {
    name: 'seq5',
  },
  {
    name: 'seq6',
  },
  {
    name: 'seq7',
  },
  {
    name: 'seq8',
  },
  {
    name: 'seq9',
  },
  {
    name: 'seq10',
  },
  {
    name: 'seq11',
  },
  {
    name: 'seq12',
  },
  {
    name: 'seq13',
  },
  {
    name: 'seq14',
  },
  ],
  views: [seq1, seq1Audio, seq2, seq3, seq4, seq5, seq6, seq7, seq8, seq9, seq10, seq11, seq12, seq13, seq14]
});

