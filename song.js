$(function() {

    $.get('/lyric.json').then(function(object) {
        let { lyric } = object
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.+)$/
        array = array.map(function(string) {
            let matches = string.match(regex)
            if (matches) {
                return { time: matches[1], words: matches[2] }
            }
        })

        let $lyric = $('.lyric')
        array.map(function(object) {
            if (!object) { return }
            $p = $('<p></p>')
            $p.attr('data-time', object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })

    let audio = document.createElement('audio')
    audio.src = 'http://win.web.ra03.sycdn.kuwo.cn/2309f752a2c67aafad8991d5882afce0/594be474/resource/a3/48/67/14/4247427266.aac'
    audio.oncanplay = function() {
        // audio.play()
        $('.disc-container').addClass('playing')
    }
})