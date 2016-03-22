$(function(){
   $('.nav-group').click(function() {
       var $header = $(this).next('ul'),
           $caret = $(this).find('img'); 
        if(!$header.find('li').is(':visible')){
            $header.slideDown();
            $caret.addClass('rotated-icon');
        }
        else{
            $header.slideUp();
            $caret.removeClass('rotated-icon');
        }
   });
   $('.nav-group + ul').hide(); 

   $('#hamburgerOpen').click(function(){
      $('#sidemenu').animate({ right: "0" }, 500)
   })

    $('#hamburgerClose').click(function(){
      $('#sidemenu').animate({ right: "-1000px" }, 500)
   })
});