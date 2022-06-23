import anime from 'animejs/lib/anime.es.js';
import Typewriter from 'typewriter-effect/dist/core';
import {Howl} from 'howler';

const seq1Audio = {
    namespace: 'seq1-audio',
    afterEnter() {

          const catronron = new Howl({
            src: ['../resources/cat_ronron.mp3'],
            html5: true,
            volume: 0.6,
          });
          
        catronron.play();
         
    },
    beforeEnter() {

        const song = new Howl({
            src: ['../resources/Misterioso-Suceso.mp3'],
            html5: true,
            loop: true,
            volume: 0.7,
          });
          
          song.play();

        /* Animacion Texto Titulo */
        var title = document.getElementById('title');
        var titleWriter = new Typewriter(title, {
            delay: 50
        });

        titleWriter.typeString('Tu vida es rutinaria y gris.')
            .pauseFor(500)
            .deleteChars(5)
            .typeString('triste.')
            .start();

        /* Animacion Texto Parrafo */
        anime.timeline()
            .add({
                targets: 'p',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: 4000,
            });

        /* Animacion Botones */
        anime.timeline()
            .add({
                targets: '.buttons',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: 8000,
            });

        anime.timeline().add({
            targets: '.cover',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: 7000,

        })
    }
}

export default seq1Audio;