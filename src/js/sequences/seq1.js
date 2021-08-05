import anime from 'animejs/lib/anime.es.js';
import Typewriter from 'typewriter-effect/dist/core';

const seq1 = {
    namespace: 'seq1',
    afterEnter() {
        setTimeout(()=> {
            const bloodSound = new Audio('../resources/cat_ronron.wav').play();
         bloodSound.play();
        },6000);
         
    },
    beforeEnter() {
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

export default seq1;