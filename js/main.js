//Header
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.logo').css({
        'transform' : 'translate(0px, '+ (wScroll/7) +'%)'
    });

    $('.fore-flower').css({
        'transform' : 'translate(0px,-'+ (wScroll/25) +'%)'
    });

    $('.back-flower').css({
        'transform': 'translate(0px,' + (wScroll / 4) + '%)'
    });

    //CLOTES SECTION
    if (wScroll > $('.clothes-container').offset().top - ($(window).height() / 1.3) ) {

        $('.clothes-container div').each(function(i) {
            setTimeout( function() {
                $(this).addClass('is-showing');
            }.bind(this), 200 * i + 1 );
            
        });
    }

    //LARGE WINDOW
    if( wScroll > $('.large-window').offset().top - $(window).height() ) {
        $('.large-window').css({
            'background-position': 'center ' + (wScroll - ($('.large-window').offset().top / 2)) + 'px'          
        });

        var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 8);

        $('.window-tint').css({'opacity' : opacity});
    }
    // NEWS/POST
    if (wScroll > ( $('.post-container').offset().top - ($(window).height() + 400) ) && $(window).width() >= 1000) {
        var offset = Math.min(0, wScroll - $('.post-container').offset().top + ($(window).height() - 350));

        $('.post-1').css({
            'transform' : 'translate('+ (offset) +'px, '+ Math.abs(offset * 0.5) +'px)'
        });
        $('.post-3').css({
            'transform': 'translate(' + Math.abs((offset)) + 'px, ' + Math.abs(offset * 0.5) +'px)'
        });
    }
    
    if (wScroll > $('.post-container').offset().top - ($(window).height() - 150) ) {
        $('.post').css({ 'opacity': 1 });
    }else {
        $('.post').css({ 'opacity': 0 });
    }
    
});