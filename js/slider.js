var currentIndex = 0,
items = $('.p-slide'),
itemAmt = items.length;

function cycleItems() {
  var item = $('.p-slide').eq(currentIndex);
  items.hide();
  if (item.hasClass('testimonial')) {
    item.css('display', 'inline-flex')
  } else {
    item.css('display', 'table')
  }
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 6000);



$('.wslide-button-next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.wslide-button-prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});