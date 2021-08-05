import anime from 'animejs/lib/anime.es.js';
import Typewriter from 'typewriter-effect/dist/core';

const seq3 = {
    namespace: 'seq3',
    beforeEnter() {

        /* Animacion Texto Titulo */
        var title = document.getElementById('title');
        var titleWriter = new Typewriter(title, {
            delay: 50
        });

        titleWriter.typeString('Tu casa se incendia.')
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

export default seq3;