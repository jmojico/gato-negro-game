import anime from 'animejs/lib/anime.es.js';
import Typewriter from 'typewriter-effect/dist/core';
import { Howl } from 'howler';

const seq6 = {
    namespace: 'seq6',
    beforeLeave(){
        const bloodSound = new Howl({
            src: ['../resources/blood_gore.mp3'],
            html5: true,
            volume: 0.3,
          });
          
          bloodSound.play();
    },
    beforeEnter() {

        /* Animacion Texto Titulo */
        var title = document.getElementById('title');
        var titleWriter = new Typewriter(title, {
            delay: 50
        });

        titleWriter.typeString('Tu pareja te detiene.')
            .start();

        /* Animacion Texto Parrafo */
        anime.timeline()
            .add({
                targets: 'p',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: 2000,
            });

        /* Animacion Botones */
        anime.timeline()
            .add({
                targets: '.buttons',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: 3000,
            });

        /* Animacion Imagena */
        anime.timeline().add({
            targets: '.cover',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: 4000,

        })
    }
}

export default seq6;