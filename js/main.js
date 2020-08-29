/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/* 	BANNER SLIDER
/*-----------------------------------------------------------------------------------*/
$('.flex-banner').flexslider({
    animation: "fade",
	slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 6000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 500,            //Integer: Set the speed of animations, in milliseconds
	autoPlay : true
});
/*-----------------------------------------------------------------------------------
    EVENT COUNTER
/*-----------------------------------------------------------------------------------*/
$('.countdown').downCount({
     date: '01/01/2016 12:00:00' // m/d/y
});
/*-----------------------------------------------------------------------------------
    Animated progress bars
/*-----------------------------------------------------------------------------------*/
$('.progress-bars').waypoint(function() {
   $('.progress').each(function(){
       $(this).find('.progress-bar').animate({
             width:$(this).attr('data-percent')
          },200);
      });
      }, { offset: '100%',
           triggerOnce: true 
});
/*-----------------------------------------------------------------------------------*/
/*    TESTIMONIALS
/*-----------------------------------------------------------------------------------*/
$(".testi-slides").owlCarousel({ 
    items : 1,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : true, // Show next and prev buttons
	pagination : true,
	animateOut: 'fadeOut',
	navigationText: ["<i class='fa fa-angle-up'></i>","<i class='fa fa-angle-down'></i>"]
});
/*-----------------------------------------------------------------------------------*/
/* 	MENU
/*-----------------------------------------------------------------------------------*/
$().ownmenu();
/*-----------------------------------------------------------------------------------*/
/* 	POPUP DONATION
/*-----------------------------------------------------------------------------------*/
$('.popup-with-zoom-anim').magnificPopup({
	type: 'inline',
	fixedContentPos: false,
	fixedBgPos: true,
	overflowY: 'auto',
	closeBtnInside: true,
	preloader: false,
	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in'
});
/*-----------------------------------------------------------------------------------*/
/* 	POPUP IMAGE GALLERY
/*-----------------------------------------------------------------------------------*/
$('.popup-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
	enabled: true,
	navigateByImgClick: true,
	preload: [0,1]},
image: {
	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	titleSrc: function(item) {
	return item.el.attr('title') + '';}}
});
/*-----------------------------------------------------------------------------------*/
/*  ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
var $container = $('.portfolio-wrapper .items');
	$container.imagesLoaded(function () {
	   $container.isotope({
	     itemSelector: '.item',
	     layoutMode: 'masonry'
 });
});
$('.filter li a').on("click",function() {
    $('.filter li a').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $container.isotope({
    filter: selector
	   });
    return false;
});
});
/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/
function checkmail(input){
  var pattern1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  	if(pattern1.test(input)){ return true; }else{ return false; }}     
    function proceed(){
    	var name = document.getElementById("name");
		var email = document.getElementById("email");
		var company = document.getElementById("company");
		var web = document.getElementById("website");
		var msg = document.getElementById("message");
		var errors = "";
	if(name.value == ""){ 
		name.className = 'error';
	  	  return false;}    
		  else if(email.value == ""){
		  email.className = 'error';
		  return false;}
		    else if(checkmail(email.value)==false){
		        alert('Please provide a valid email address.');
		        return false;}
		    else if(company.value == ""){
		        company.className = 'error';
		        return false;}
		   else if(web.value == ""){
		        web.className = 'error';
		        return false;}
		   else if(msg.value == ""){
		        msg.className = 'error';
		        return false;}
		   else 
		  {
$.ajax({
	type: "POST",
	url: "submit.php",
	data: $("#contact_form").serialize(),
	success: function(msg){
	//alert(msg);
    if(msg){
		$('#contact_form').fadeOut(1000);
        $('#contact_message').fadeIn(1000);
        	document.getElementById("contact_message");
         return true;
        }}});
}};
