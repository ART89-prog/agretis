$(() => {

    $('.header_menu li a').on('click', function() {
        let href = $(this).attr('href');    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 870,  
            easing: "linear" 
        });
    
        return false;
    });

    $('.footer_menu li a').on('click', function() {
        let href = $(this).attr('href');    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 870,  
            easing: "linear" 
        });
    
        return false;
    });


    $('.header-info a').on('click', function() {
        let href = $(this).attr('href');    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 870,  
            easing: "linear" 
        });
    
        return false;
    });





})