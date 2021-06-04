/* Hamburger */

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuLink = document.querySelectorAll('.menu__link-link');

hamburger.addEventListener('click', () => {        
 menu.classList.add('active');
}); 

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
}); 

menuLink.forEach( (i) => {
    i.addEventListener('click', () => {
        menu.classList.remove('active')
    });
});
    


/* Skills */

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});      

/* Smooth scroll */
$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $('.pageup').fadeIn();        
        } else {
            $('.pageup').fadeOut();
        }
    });  

     
// /* Modal */
    // $('[data-modal=thanks]').on('click', function() {
    //     $('.overlay, #thanks').fadeIn('slow');
    //   });
      $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
      });

   

//       /* Sending mails from page */
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");        
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
  });
});


