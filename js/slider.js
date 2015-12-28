                var currentIndex = 0,
                items = $('.p-slide'),
                itemAmt = items.length;

              function cycleItems() {
                var item = $('.p-slide').eq(currentIndex);
                items.hide();
                item.css('display','table');
              }

              var autoSlide = setInterval(function() {
                currentIndex += 1;
                if (currentIndex > itemAmt - 1) {
                  currentIndex = 0;
                }
                cycleItems();
              }, 5000);