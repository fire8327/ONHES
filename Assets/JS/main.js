/* dropdown */
$(".dropdown").each((i, el) => {
    $(el).find(".dropdownToggler").click(() => {
        $(el).find(".dropdownToggler").find("img").toggleClass("rotate-45")
        $(el).find(".dropdownList").toggle(500)
    })
})

/* tabs */
$( function() {
    $( "#tabs" ).tabs();
} );

/* modals */
for (let i = 1; i < 10; i++) {
    $(`#openModal${i}`).click(() => {
        $(`#modal${i}`).removeClass("-translate-y-[1000px]")
        $(`#modal${i}`).addClass("top-1/2 -translate-y-1/2")
        $("#overlay").removeClass("hidden")
    })

    $(`#overlay, #closeModal${i}`).click(() => {
        $(`#modal${i}`).addClass("-translate-y-[1000px]")
        $(`#modal${i}`).removeClass("top-1/2 -translate-y-1/2")
        $("#overlay").addClass("hidden")
    })
}