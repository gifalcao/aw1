
const keys = document.querySelectorAll(".key")

function playNote(event) {
    let audioKeyCode = getKeyCode(event);

    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)


    const cantFoundAnyKey = !key
    if (cantFoundAnyKey) {
        return;
    }

    addPlayingClass(key)
    playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add("playing")
}

function getKeyCode(event) {
    let keyCode;
    const isKeyboard = event.type === "keydown"
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

function registerEvents() {
    // click with mouse
    keys.forEach(function (key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })

    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)


$(".iniciar-btn").on('click', function () {
    go.In('fadeIn').Out('fadeOut').to("pianoLogic.animation();");
})

var Tween = new TimelineLite();
var branco1 = $("#branco1");
var branco2 = $("#branco2");
var branco3 = $("#branco3");
var branco4 = $("#branco4");
var branco5 = $("#branco5");
var branco6 = $("#branco6");
var branco7 = $("#branco7");
var branco8 = $("#branco8");
var branco9 = $("#branco9");
var branco10 = $("#branco10");
var branco11 = $("#branco11");
var branco12 = $("#branco12");
var branco13 = $("#branco13");
var preto1 = $("#preto1");
var preto2 = $("#preto2");
var preto3 = $("#preto3");
var preto4 = $("#preto4");
var preto5 = $("#preto5");
var preto6 = $("#preto6");
var preto7 = $("#preto7");
var preto8 = $("#preto8");
var preto9 = $("#preto9");
var preto10 = $("#preto10");

pianoLogic = {
    animation: function () {
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })

        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })

        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })

        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })

        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Dm
        Tween.to(branco2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco4, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })

        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Dm
        Tween.to(branco2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco4, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Dm
        Tween.to(branco2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco4, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //Gm
        Tween.to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco5, 0.4, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
        //Eb
        Tween.to(preto2, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto2, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco5, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto5, 0.2, { background: "#fff", delay: 0.1 })
        //F
        Tween.to(branco4, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco6, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(preto8, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(branco4, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco6, 0.5, { background: "#fff", delay: 0.1 })
            .to(preto8, 0.2, { background: "#fff", delay: 0.1 })
        //Bb
        Tween.to(preto5, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco9, 0.1, { background: "#90c0ce", delay: 0.1 })
            .to(branco11, 0.1, { background: "#90c0ce", delay: 0.1 })

            .to(preto5, 0.4, { background: "#fff", delay: 0.1 })
            .to(branco9, 0.5, { background: "#fff", delay: 0.1 })
            .to(branco11, 0.2, { background: "#fff", delay: 0.1 })
    }
}