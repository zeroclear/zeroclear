function moving() {
    var e = $(".yellow-wrap"),
    o = $(".red-wrap"),
    s = $(".yellow"),
    a = $(".openClose"),
    i = ($(".red"), $(".game span"));
    setTimeout(function() {
        $(".ready").hide(),
        e.addClass("yellowMoving"),
        s.addClass("yellowRotate"),
        o.addClass("redMoving"),
        i.each(function(e) {
            $(this).addClass("span" + (e + 1))
        }),
        setTimeout(function() {
            a.addClass("toBig"),
            setTimeout(function() {
                a.removeClass("toBig"),
                o.hide()
            },
            200),
            setTimeout(function() {
                e.removeClass("yellowMoving"),
                s.removeClass("yellowRotate"),
                o.removeClass("redMoving"),
                o.show(),
                i.each(function(e) {
                    $(this).removeClass("span" + (e + 1))
                }),
                $(".ready").show(),
                moving()
            },
            1e3)
        },
        28800)
    },
    3e3)
}
nie.config.copyRight.setGray(),
moving();
