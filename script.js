// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video')
let progress = $('.progress__filled').first();
let btn = $('.player__button').first()

let a = 0;

btn.on("click", () => {
    if (a === 0) {
        player.get(0).play()
        a = 1
        btn.html('\u23f8')
    }
    else {
        player.get(0).pause()
        a = 0
        btn.html('►')
    }
})

player.on('timeupdate', function () {
    let progress = (this.currentTime / this.duration) * 100;
    $('.progress__filled').css('width', progress + '%')
});