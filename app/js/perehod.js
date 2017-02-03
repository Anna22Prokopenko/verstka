$(document).ready(function() {
   $('a[href^="#"]').click(function () { 
     var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top - 60;
       $('html,body').animate( { scrollTop: destination }, 1100 );
   });
   function hideBlock() {
    var logo = $('.logo');
    if($('body').scrollTop() <= 120) {
      //logo.show();
	  logo.fadeIn(1500);
    }
    else {
      //logo.hide();
	  logo.fadeOut(1500);
    }
  }
  $(window).scroll(hideBlock);

 });