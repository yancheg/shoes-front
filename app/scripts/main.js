'use strict';
(function(){

    $('.checkbox label').on('click', function(){

        var parent = $(this).parent();

        if(!parent.find('input').is(':checked')){
            $(parent).css('border-color','#aa9b77');
        }
        else{
            $(parent).css('border-color','#ccc');
        }
    });

    $('.arrow').on('click', function(){

        $('html, body').animate({scrollTop : $('section.filter').offset().top},800);
    });

})();
