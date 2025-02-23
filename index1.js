document.addEventListener("DOMContentLoaded", function () {
    let audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.addEventListener("play", function () {
            audios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });
});
