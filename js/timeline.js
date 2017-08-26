// TIMELINE FUNCTIONS

function articleTada() {
  var rand = Math.floor(Math.random() * ('.article-block').length) + 1;
  $('.article-block')
      .eq(rand)
      .addClass('is-emph')
      .siblings().removeClass('is-emph');
}

$(document).ready(function() {
  

setInterval(function() {articleTada()}, 300);
  
var searchVisible = false;
var menuVisible = false;



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
  $('html, body').animate( {
    scrollTop: $("#timeline").offset().top - 70
  }, 800);
  return false;
});

//search
function searchBtn() {
    if(!searchVisible || menuVisible) {
        searchVisible = true;
        $('#search').fadeIn("100ms");
        $('#close-btn').fadeIn("125ms");
    } else {
        searchVisible = false;
        closeMenu();
    }
  
}
$('#search-btn').click(function() {
  searchBtn();
});

//menu
function menuBtn() {
    if(menuVisible) {
        menuVisible = false;
        closeMenu();
    } else {
        menuVisible = true;
        searchBtn();
        $('header > .wrapper > main').fadeIn("150ms");
    }
}
  
$('#bars').click(function()  {
  menuBtn();
});

function closeMenu() {
  //header();
  $('header > .wrapper > main').fadeOut("150ms");
  $('#search').fadeOut("125ms");
  $('#close-btn').fadeOut("100ms");
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

});
