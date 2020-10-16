$(document).ready(function() {
    $('.minus').click(function () {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        let $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// JQuery slider function

$(document).ready(function(){
	$('.imgscreen').slick({dots: true});
});

// Zoom in

jQuery(function(){if(!$.fn.imagezoomsl){

    $('.msg').show();
    return;
  }
  else $('.msg').hide();

  $('.pics').imagezoomsl({ 

      innerzoommagnifier: true,
      classmagnifier: window.external ? window.navigator.vendor === 'Yandex' ? "" : 'round-loope' : "", //Opera, Safary, Yandex
      magnifierborder: "5px solid #F0F0F0",                 //Opera, Safary, Yandex      
      zoomrange: [1, 2],
      zoomstart: 1,
      magnifiersize: [300, 300]  
    }); 
  });