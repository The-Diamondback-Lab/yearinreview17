// TIMELINE FUNCTIONS

function articleTada() {
  var rand = Math.floor(Math.random() * ('.article-block').length) + 1;
  $('.article-block')
      .eq(rand)
      .addClass('is-emph')
      .siblings().removeClass('is-emph');
}

$(document).ready(function() {


      var timeline = [{
          month: "august 2016",
          id: "august16"
        },
        {
          month: "september 2016",
          id: "september16"
        },
        {
          month: "october 2016",
          id: "october16"
        },
        {
          month: "november 2016",
          id: "november16"
        },
        {
          month: "december 2016",
          id: "december16"
        },
        {
          month: "january 2017",
          id: "january17"
        },
        {
          month: "february 2017",
          id: "february17"
        },
        {
          month: "march 2017",
          id: "march17"
        },
        {
          month: "april 2017",
          id: "april17"
        },
        {
          month: "may 2017",
          id: "may17"
        },
        {
          month: "june 2017",
          id: "june17"
        },
        {
          month: "july 2017",
          id: "july17"
        },
        {
          month: "august 2017",
          id: "august17"
        }
      ];

      //scroll to top button
      function scrollToTop() {
        if ($(this).scrollTop() > 300) {
          $('#top').fadeIn();
        } else {
          $('#top').fadeOut();
        }
      }
      $(window).scroll(function() {
        scrollToTop();
      });

      scrollToTop();

      $('#top').click(function() {
        $('html, body').animate({
          scrollTop: $("#timeline").offset().top - 70
        }, 800);
        return false;
      });

      function searchBtn() {
        $('#search').fadeIn("100ms");
        $('.menu-btns').css('display', 'flex');
      }
      $('#search-btn').click(function() {
        searchBtn();
      });

      function menuBtn() {
        searchBtn();
        $('header > .wrapper > main').fadeIn("150ms");
      }
      $('#bars').click(function() {
        menuBtn();
      });

      function closeMenu() {
        $('header > .wrapper > main').fadeOut("150ms");
        $('#search').fadeOut("125ms");
        $('.menu-btns').fadeOut("100ms");
      }
      $('#close-btn').click(function() {
        closeMenu();
      });
      $('.date-link').click(function() {
        closeMenu();
      });

      var header = document.getElementsByTagName("header")[0];

      //I'm using "click" but it works with any event
      document.addEventListener('click', function(event) {
        var isClickInside = header.contains(event.target);

        if (!isClickInside) {
          closeMenu();
        }

      });

      $('.btn-all').click(function(event){$("#top").trigger("click");  $("#filter-display").text(function(){return "";}); closeMenu();});
      $('.cat-link').click(function(event){$("#top").trigger("click"); $("#filter-display").text(function(){return "Filter: "+(event.currentTarget.innerText);}); closeMenu();});
  
  
    //article hovers
    function turnOffArticleHovers() {
      $('#hovertoggle').text('turn on article hovers');
      $('.article-block > .text').css('visibility', 'visible');
      $('article').hover(
        function () {
          $(this).find('.article-block > .text').css('visibility', 'visible');
        },
        function () {
          $(this).find('.article-block > .text').css('visibility', 'visible');
        }
      );
    }
    function turnOnArticleHovers() {
      $('#hovertoggle').text('turn off article hovers');
      $('.article-block > .text').css('visibility', 'hidden');
      $('article').hover(
        function () {
          $(this).find('.article-block > .text').css('visibility', 'visible');
        },  
        function () {
          $(this).find('.article-block > .text').css('visibility', 'hidden');
        }
      );
    }
  
  
    $('#hovertoggle').click(function() {
      if ($(this).text() === "turn off article hovers") {
        turnOffArticleHovers();
      } else {
        turnOnArticleHovers();
      }
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  });
