$(document).ready(function () {
   var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);  
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
   
  $(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  
		var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
		$(modalOverlay).mouseup(function () {
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    });

});
  //Обработка форм
  $(".form").each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
          required: "Please specify your name",
          minlength: "The name must be at least two characters"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Phone is required",
          minlength: "The phone number must be eleven characters"
        },
  }
});
  })
  $(document).ready(function(){
    $('.phone').mask('+7 (999) 999-99-99');
  });
  AOS.init();
});

const swiper = new Swiper('.swiper', { 
  spaceBetween: 26,
  slidesPerView: 4, 
  loop: false, 
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  
});

const swiper1 = new Swiper('.swiper1', { 
  spaceBetween: 27,
  slidesPerView: 5, 
  loop: false, 
  // Navigation arrows
  navigation: {
    nextEl: '.slider1-button--next',
    prevEl: '.slider1-button--prev',
  },
  
});