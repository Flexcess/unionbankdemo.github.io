$(function(){
  // $('[src="../images/icons/menu-search.png"], [src="../images/icons/menu-search.png"] + span').hide();  
  
  $('[src="../images/icons/menu-search.png"]').click(function(){
     if(!$('#searchFor').length){
      $('#topNav').append('<div style="clear: both;float: right; margin-top:-27px;" id="searchFor">'+
                              '<input placeholder="search here" style="font-size: 30px;margin-bottom: 0;border-top:0"/>'+
                           '</div>');
        $('#searchFor input').focus();        
    }else
        $('#searchFor').remove();
  });

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