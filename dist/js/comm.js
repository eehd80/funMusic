$(function () {
    // load
    // ("use strict");
    // $("#u_skip").load("./layout/u_skip.html");
    // $("#header").load("./layout/header.html");
    // $("#footer").load("./layout/footer.html");

    //gnb
    var $navDepth1 = $("#gnb nav"),
        $header = $("#header");

    // header sticky
    let $window = $(window);
    $window
        .scroll(function () {
            if ($(this).scrollTop() > 50) {
                $header.addClass("sticky");
            } else {
                $header.removeClass("sticky");
            }
        })
        .trigger("scroll");

    // familySite
    // $(".label-familysite").on("click", function (event) {
    //     event.preventDefault();
    // });

    // search
    $("#search").each(function () {
        let $this = $(this),
            $searchBtn = $this.find(".btn"),
            $formControl = $this.find(".form-control");

        $searchBtn.on("click", function () {
            $formControl.toggleClass("on");
        });
    });
});
