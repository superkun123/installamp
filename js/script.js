$( document ).ready(function() {



  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    prevArrow: ``,
    nextArrow: `<button type="button" class="slick-next"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="white"/>
    <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="white"/>
    </svg></button>`
});
$('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    vertical:true,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    draggable: true,
    verticalSwiping:true,
    responsive: [
    {
        breakpoint: 992,
        settings: {
          vertical: false,
        }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
      }
    },
    {
      breakpoint: 580,
      settings: {
        vertical: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 380,
      settings: {
        vertical: false,
        slidesToShow: 4,
      }
    }
    ]
});


$('.main-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: `<button type="button" class="slick-prev">
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.707107 7.7784C0.316583 7.38787 0.316582 6.75471 0.707107 6.36418C1.09763 5.97366 1.7308 5.97366 2.12132 6.36418L7.77817 12.021C8.1687 12.4116 8.1687 13.0447 7.77817 13.4353C7.38765 13.8258 6.75449 13.8258 6.36396 13.4353L0.707107 7.7784Z" fill="white"/>
<rect x="7.07031" width="2" height="10" rx="1" transform="rotate(45 7.07031 0)" fill="white"/>
</svg>

    </button>`,
    nextArrow: `<button type="button" class="slick-next"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="white"/>
    <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="white"/>
    </svg></button>`

  });



  $('.logo-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: `<button type="button" class="slick-prev">
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.707107 7.7784C0.316583 7.38787 0.316582 6.75471 0.707107 6.36418C1.09763 5.97366 1.7308 5.97366 2.12132 6.36418L7.77817 12.021C8.1687 12.4116 8.1687 13.0447 7.77817 13.4353C7.38765 13.8258 6.75449 13.8258 6.36396 13.4353L0.707107 7.7784Z" fill="white"/>
<rect x="7.07031" width="2" height="10" rx="1" transform="rotate(45 7.07031 0)" fill="white"/>
</svg>

    </button>`,
    nextArrow: `<button type="button" class="slick-next"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="white"/>
    <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="white"/>
    </svg></button>`,
    responsive: [
      {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
      }
    ]

  });




 $('.aside-menu__li a').on('click', function(event) {
   event.preventDefault()
 })



//  Показать ещё

$('.showmore-btn').on('click', function(e) {
  e.preventDefault()
  $('.product-hidden').addClass('show-hidden-product ')
})






$('.minus').on('click', function(e) {
  const counterParent = $(this).parent()
  const counterBody = $(counterParent).find('.counter-value')
  let counter = parseInt($(counterBody).val())
  $(counterBody).val(counter)
  if (counter <= 0) {
    counter = 0
  } else {
    counter -= 1
    $(counterBody).val(counter)
  }
})


$('.plus').on('click', function(e) {
  const counterParent = $(this).parent()
  const counterBody = $(counterParent).find('.counter-value')
  let counter = parseInt($(counterBody).val())
  $(counterBody).val(counter)
  console.log('плюс 1')
  counter += 1
  $(counterBody).val(counter)
})



// $('.cross').on('click', function() {
//   const crossParent = $(this).closest('.busket__item')
//   const currentCross = crossParent.find('.cross')
//   $(currentCross).on('click', function() {
//     crossParent.remove()
//   })
  
// })






$('.checkbox-filter').on('click', function() {
  if ($('.checkbox-filter').is(":checked") ) {
  console.log($(this).offset())
  let currentOffset = $(this).offset()
  console.log(currentOffset.top)
  $('.show-filter-btn').css('display', 'block')
  $('.show-filter-btn').css('top', currentOffset.top -20 +'px')
  } else {
    $('.show-filter-btn').css('display', 'none')
  }
})



$('.remove-filter').on('click', function(e) {
  e.preventDefault()
  $('.checkbox-filter').prop('checked', false)
  $('.show-filter-btn').css('display', 'none')
})




// Фильтры - показать на чекбокс


$('.js-tab-trigger').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
  
  $('.js-tab-trigger.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2
  
  $('.js-tab-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
});




$('.container-for-filter').on('click', function() {
  console.log('click-on-mark')
  let currentMark = $(this).find('.checkmark')
  $(currentMark).toggleClass('checkmark-fill')
})

$('.remove-filter').on('click', function() {
  $('.checkmark').removeClass('checkmark-fill')
})




let acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var hiddenMenu = document.querySelector('.hidden-menu')
    if (hiddenMenu.style.maxHeight) {
      hiddenMenu.style.maxHeight = null;
    } else {
      hiddenMenu.style.maxHeight = hiddenMenu.scrollHeight + "px";
    } 
  });
}


// Многоуровневое меню для мобилок

const navExpand = [].slice.call(document.querySelectorAll('.nav-expand-header'))
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Назад
	</a>
</li>`

navExpand.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


const ham = document.getElementById('ham')
if (ham) {
ham.addEventListener('click', function(e) {+
  e.preventDefault()
  document.body.classList.toggle('nav-is-toggled-header')
  $('.firstline').toggleClass('topLine')
  $('.secondline').toggleClass('middleLine')
  $('.thirdline').toggleClass('bottomLine')
})
}


// Меню фильтров

const navExpandFilter = [].slice.call(document.querySelectorAll('.nav-expand-filter'))
console.log(navExpandFilter)
const backLinkFilter = ``

navExpandFilter.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLinkFilter)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


const filterBtn = document.getElementById('filter-btn')
const filterCross = document.querySelector('.cross-filter')
if (filterBtn) {
filterBtn.addEventListener('click', function() {
  document.body.classList.toggle('nav-is-toggled-filter')
})

}


$('.cross-filter').on('click', function() {
  console.log('click-filter')
  $('body').toggleClass('nav-is-toggled-filter')
})




// Тип карточек товаров


$('.list-type').on('click', function() {
  $('.list-type').removeClass('list-type-active')
  $(this).addClass('list-type-active')
})


$('#list-md-3').on('click', function() {
  $('.product-container').removeClass('col-md-4')
  $('.product-container').addClass('col-md-3')



  $('.product-content .row').removeClass('block')
  $('.product-container').removeClass('mwidth')
  $('.recomendet__product').removeClass('flex-dir')
  $('.another-view__title').removeClass('block')
  $('.product__title').removeClass('none')
  $('.product__basket svg').removeClass('none')
  $('.product__basket--value').removeClass('inline')
  $('.product-img__container').removeClass('product-img__container-another')
  $('.product__basket--value').removeClass('block')
  $('.product__basket').removeClass('another-basket')
  $('.product__title-n-price').removeClass('product-price-another')
  $('.another-title').removeClass('font24')
  $('.product-img__container-another').removeClass('product-img__container-another-1')
  $('.product__title-n-price').removeClass('product-price-another')
  $('.product__desc-row').removeClass('product__desc-row-another')

})

$('#list-md-4').on('click', function() {
  $('.product-container').removeClass('col-md-3')
  $('.product-container').addClass('col-md-4')


  $('.product-content .row').removeClass('block')
  $('.product-container').removeClass('mwidth')
  $('.recomendet__product').removeClass('flex-dir')
  $('.another-view__title').removeClass('block')
  $('.product__title').removeClass('none')
  $('.product__basket svg').removeClass('none')
  $('.product__basket--value').removeClass('inline')
  $('.product-img__container').removeClass('product-img__container-another')
  $('.product__basket--value').removeClass('block')
  $('.product__basket').removeClass('another-basket')
  $('.product__title-n-price').removeClass('product-price-another')
  $('.another-title').removeClass('font24')
  $('.product-img__container-another').removeClass('product-img__container-another-1')
  $('.product__title-n-price').removeClass('product-price-another')
  $('.product__desc-row').removeClass('product__desc-row-another')
})


$('#column-1').on('click', function() {
  $('.product-content .row').addClass('block')
  $('.product-container').addClass('mwidth')
  $('.recomendet__product').addClass('flex-dir')
  $('.another-view__title').addClass('block')
  $('.product__title').addClass('none')
  $('.product__basket svg').addClass('none')
  $('.product__basket--value').addClass('inline')
  $('.product-img__container').addClass('product-img__container-another')
  $('.product__basket--value').addClass('block')
  $('.product__basket').addClass('another-basket')
  $('.product__title-n-price').addClass('product-price-another')
  $('.another-title').addClass('font24')
  $('.product-img__container-another').addClass('product-img__container-another-1')

  $('.product__desc-row').removeClass('product__desc-row-another')
})


$('#column-2').on('click', function() {
  $('.product-content .row').addClass('block')
  $('.product-container').addClass('mwidth')
  $('.recomendet__product').addClass('flex-dir')
  $('.another-view__title').addClass('block')
  $('.product__title').addClass('none')
  $('.product__basket svg').addClass('none')
  $('.product__basket--value').addClass('inline')
  $('.product-img__container').addClass('product-img__container-another')
  $('.product__basket--value').addClass('block')
  $('.product__basket').addClass('another-basket')
  $('.product__title-n-price').addClass('product-price-another')
  $('.product__desc-row').addClass('product__desc-row-another')
  $('.another-title').removeClass('font24')
  $('.product-img__container').removeClass('product-img__container-another-1')

})




});