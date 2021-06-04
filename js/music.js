function randomInteger(min, max) {
    return Math.round(Math.random() * (max - min) ) + min;
}

function randomChoice(list) {
    var index = randomInteger(0, list.length - 1);
    return list[index];
}

var playlist = ["song1", "song2", "song3", "song4", "song5"];

var song = "audio/" + randomChoice(playlist) + ".mp3";

var audio = new Audio(song);

audio.volume = 0.2;
audio.loop = true;

audio.oncanplaythrough = (event) => {
    var playedPromise = audio.play();

    if (playedPromise) {
        playedPromise.catch((err) => {
            document.addEventListener("click", event => audio.play());
        })
    }
}