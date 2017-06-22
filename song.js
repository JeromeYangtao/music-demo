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
            $p.appendTo($lyric)
        })
    })
})