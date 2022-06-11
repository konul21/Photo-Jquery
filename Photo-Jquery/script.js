
$(function () {
    $('.imgs img').click(function () {
        let img = $(this).attr('src');
        $('#img1 img').attr('src', img).css({

            'width': "400px",
            'height': "600px",
        })
    })

    $('#bg').css({
        'width': "100%",
        'height': "100%",
        'background-color': "rgba(0,0,0,0.5)",
        'background-repeat': 'no-repeat',
        'background-size': "contain",
        'background-position': "center",
        'position': 'fixed',
        'top': 0,
        'display': "none"
    });

    $('#img1').click(function() {
        let img = $(this).attr('src');
        $('#bg').css({
            'background-image':`url('${img}')`,
            'display': 'block'
        })


    })

    $('#bg').click(function () {
        $(this).css('display', 'none')
    })
})



