$(function () {
    // when document loads (ready)
    // button call function
    $('#click-button').click(function () {
        // change the text color to green h1 #special
        $("#special").css("color", "green");

        $(".highlight").css("background-color", "yellow");

        $("p").each(function () {
            // extract HTML from each paragraph

            $("p").css("background-color", "white");
            $("p").css("color", "red");
            $("p").css("width", "100%");
            alert($(this).text())

        });

    });

    $("#hide").click(function () {
        // select all <p> elements and hide them all
        $("#hide-img").hide();
    });
    $("#show").click(function () {
        // when you click on element with id=show
        // then show all <p> element
        $("#hide-img").show();
    });

    $("#fadeout").click(function () {
        $("#hide-img").fadeOut(2000);
    });

    $('#ani').click(function () {

        var obj = $("#animation");
        obj.animate({
            left: '300px',
            opacity: '0.3',
            height: '+=10px',
            width: '+=10px'
        })

    });

    $('input').on("change", function () {
        if ($('#user').val().length === 0 || $('#pass').val().length === 0) {
            alert("Make sure that both fields are not empty.")
        }
        else if ($('#user').val().length !== 0 && $('#pass').val().length !== 0) {

            $('#demo').html($('#user').val() + " " + $('#pass').val())
        }
    });

    $("#user").on("change", function () {
        if ($(this).val().length === 0) {
            $(this).blur(function () {
                // chnage css style
                $(this).css("background-color", "yellow");
            });
            alert("Please enter your username.")
        };

    });

    $("#pass").on("change", function () {
        if ($(this).val().length === 0) {
            $(this).blur(function () {
                // chnage css style
                $(this).css("background-color", "yellow");
            });
            alert("Please enter your password.")
        };

    });

});






/*
, width,
and border properties.
d. Use the alert function to display the HTML content for each of the <p> elements */