/*popup的程式碼*/
$('.popup-btn').click(function (e) {
    var href = $(this).attr('list')
    $('#' + href).fadeIn(250)
    $(href).children('.popup-box').removeClass('transform-out').addClass('transform-in')
    e.preventDefault()
})

$('.popup-close').click(function () {
    $('.popup-wrap').fadeOut(200)
    $('.popup-box').removeClass('transform-in').addClass('transform-out')
    e.preventDefault()
})
/*到這裡為止*/

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        var target = $($(this).attr('href')).offset().top

        $('html,body').animate({ scrollTop: target }, 500)

        return false
    })
})

// nav
$(document).ready(function () {
    wdth = $(window).width()

        $(window).scroll(function () {
            if (wdth >480&&wdth <=768 ) {
                if ($(window).scrollTop() > 70) {
                    $('header').addClass('Msmall')
                    $('nav').addClass('Msmall')
                    $('.logo').addClass('Msmall')
                } else {
                    $('header').removeClass('Msmall')
                    $('nav').removeClass('Msmall')
                    $('.logo').removeClass('Msmall')
                }
            } else if (wdth < 480) {
                if ($(window).scrollTop() > 70) {
                    $('header').addClass('Ssmall')
                    $('nav').addClass('Ssmall')
                    $('.logo').addClass('Ssmall')
                    $('.nav-menu').addClass('Ssmall')
                } else {
                    $('header').removeClass('Ssmall')
                    $('nav').removeClass('Ssmall')
                    $('.logo').removeClass('Ssmall')
                    $('.nav-menu').removeClass('Ssmall')
                }
            } else {
                if ($(window).scrollTop() > 70) {
                    $('header').addClass('small')
                    $('nav').addClass('small')
                    $('.logo').addClass('small')
                } else {
                    $('header').removeClass('small')
                    $('nav').removeClass('small')
                    $('.logo').removeClass('small')
                }
            }
    })
})

$(function () {
    $(body).ready(function (event) {
        $('select').on('mouseenter', 'option', function (e) {
            this.style.background = '#DCDCDC'
        })
        $('select').on('mouseleave', 'option', function (e) {
            this.style.background = 'none'
        })
    })
})

/*漢堡選單*/

$(function () {
    $(document).ready(function () {
        let $ul = $('.nav-list'),
            $menu = $('.nav-menu')

        $($menu).click(function () {
            $ul.toggleClass('menu-click')
        })
    })
})

/*_____________________*/
