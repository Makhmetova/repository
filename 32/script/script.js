$(Document).ready( function () {
    let hiddenRow = $(".expandable");
    $(".expand-btn").click(function() {
        hiddenRow.toggleClass("hidden");
        if (hiddenRow.is(":visible")){
             // видимый ли этот элемент
            $(".expand-btn").html("Уменьшить");
        } else {
            $(".expand-btn").html("Расширить");
        }
    }); // on 'click'
    $(".play-button").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-close").click(function () {
        $(".modal-canvas").toggleClass("hidden")
    });
});        