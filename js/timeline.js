// TIMELINE FUNCTIONS

$(document).ready(function() {
 
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
  
//header + nav
//function header() {
//  if ($(window).scrollTop < 100) {
//    //$( "header" ).css('background-color', 'transparent'); 
//    $( "header > .wrapper" ).css('padding', '2.5em 0'); 
//  } else {
//    //$( "header" ).css('background-color', '#b62424');
//    $( "header > .wrapper" ).css('padding', '1.5em 0'); 
//  }
//}
$(window).scroll(function() {
  //header();
});
  
function searchBtn() {
  //$( "header" ).css('background-color', '#b62424');
  //$( "header > .wrapper" ).css('padding', '2.5em 0');
  $('#search').fadeIn("100ms");
  $('#close-btn').fadeIn("125ms");
} 
$('#search-btn').click(function() {
  searchBtn();
});
 
function menuBtn() {
  searchBtn();
  $('header > .wrapper > main').fadeIn("150ms");
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

});
