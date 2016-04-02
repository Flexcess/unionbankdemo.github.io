$(function(){ 
    $('[src="../images/icons/menu-search.png"]').click(function(){
        if(!$('#searchHolder').length){
          $('#topNav').append('<div id="searchHolder" class="hide">'+
                                  '<button id="searchBtn" class="u-pull-right bg-navyblue text-white">Search</button>'+
                                  '<input id="searchQuery" class="margin-bottom-none u-pull-right margin-right" placeholder="search here" />'+
                               '</div>');
            $('#searchHolder').slideDown("fast", function(){$('#searchQuery').focus();});        
        }else{
           $('#searchHolder').slideUp("fast", function(){$(this).remove()});
        }
      });

   $(document).on('click', '#searchBtn', function(){
       var SearchText = $('#searchQuery').val().trim().replace(/ /g, '+');
       if (SearchText != null && SearchText != '') {
           var searchRedirectURL = 'http://www.unionbankofindia.co.in/SearchPage.aspx?zoom_sort=0&zoom_xml=0&zoom_query=' + SearchText + '&zoom_per_page=10&zoom_and=0',
               win =  window.open(searchRedirectURL, '_blank');
            win.focus();
       }
    }).on('keypress', '#searchQuery', function(){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
        $('#searchBtn').click();
      }
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