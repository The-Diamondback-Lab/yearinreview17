// TIMELINE FUNCTIONS

$(document).ready(function() {

var searchVisible = false;
var menuVisible = false;

var timeline = [
  {month: "august 2016", id: "august16" },
  {month: "september 2016", id: "september16" },
  {month: "october 2016", id: "october16"},
  {month: "november 2016", id: "november16" },
  {month: "december 2016", id: "december16" },
  {month: "january 2017", id: "january17" },
  {month: "february 2017", id: "february17" },
  {month: "march 2017", id: "march17" },
  {month: "april 2017", id: "april17" },
  {month: "may 2017", id: "may17" },
  {month: "june 2017", id: "june17" },
  {month: "july 2017", id: "july17" },
  {month: "august 2017", id: "august17" }
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
  $('html, body').animate( {
    scrollTop: $("#timeline").offset().top - 70
  }, 800);
  return false;
});

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
