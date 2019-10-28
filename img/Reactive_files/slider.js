$('.slider-nav').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: false,
   centerMode: false,
   focusOnSelect: false,
   autoplay: false,
});
$('.slider-product-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-product-nav',

});
$('.slider-product-nav').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.slider-product-for',
   dots: false,
   prevArrow: '<button class="prev-product"  type="button"> <span class="flaticon-back"></span> </button>',
   nextArrow: '<button class="next-product" type="button"><span class="flaticon-next"></span></button>',
   centerMode: false,
   focusOnSelect: false,
   autoplay: false,
});
$('.promos').slick({
       dots: false,
       infinite: true,

       speed: 500,
       slidesToShow: 4,
       slidesToScroll: 1,
       arrows: false,
       responsive: [
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         },
      {
         breakpoint: 770,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       },
       {
          breakpoint: 400,
          settings: {
             arrows: true,
             slidesToShow: 1,
             slidesToScroll: 1
          }
       }]
   });
   //
