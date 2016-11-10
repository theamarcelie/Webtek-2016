$('#1').mouseenter(function() 
       {
       
          $(this).css("cursor","pointer");
           $(this).animate({width: "50%", height: "50%"}, 'slow');


       });
    
    $('#1').mouseleave(function()
      {   
          $(this).animate({width: "28%"}, 'slow');
   });
