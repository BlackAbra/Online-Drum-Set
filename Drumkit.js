
// Creating Audio Elements

 
var kick = new Audio('https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Big-Rack-Tom.mp3');
var crash = new Audio('https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Crash.mp3');
var lowTom = new Audio('https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Floor-Tom.mp3');
var midTom = new Audio('https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Hi-Hat-Closed.mp3');
var highTom = new Audio('hhttps://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Small-Rack-Tom.mp3');
var snare = new Audio('https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Snare.mp');
var hiHat = new Audio('https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/High-Hat-Open.mp3');

 const Q = 81 ;
 const A = 65 ;
 const S = 83 ;
 const D = 68 ;
 const F = 70 ;
 const T = 84 ;
 const X = 88 ;


$(document).keydown(function (event) {

    if (event.which ==  Q ) {
        crash.play()
        $('img').animate({'width':'340'},20).animate({'width':'350'},20).animate({'width':'350'},20)
        $('h3').html('Crash button pressed'); 
      
    };
    

    if (event.which ==  A ) {
        lowTom.play()
        $('img').animate({ 'width':'340'},20).animate({'width':'350'},20).animate({'width':'350'},20)
        $('h3').html('lowTom button pressed'); 
    
    }

    if (event.which ==  S ) {
        midTom.play()
        $('img').animate({ 'width':'340'},20).animate({'width':'350'},20).animate({'width':'350'},20)
        $('h3').html('midTom button pressed'); 
    
    }

    if (event.which ==  D ) {
        highTom.play()
        $('img').animate({ 'width':'340'},20).animate({'width':'350'},20).animate({'width':'350'},20)
        $('h3').html('highTom button pressed'); 
    
    }

    if (event.which ==  F ) {
        snare.play()
        $('img').animate({ 'width':'340'},20).animate({'width':'350'},20).animate({'width':'350'},20)
        $('h3').html('snare button pressed'); 
    
    }

    if (event.which ==  T ) {
        crash.play()
        $('img').animate({ 'width':'340'},20).animate({'width':'350'},20).animate({'width':'350'},20)
        $('h3').html('crash button pressed'); 
    
    }

    if (event.which ==  X ) {
        hiHat.play()
        $('img').animate({ 'width':'340'},20).animate({'width':'350'},20).animate({'width':'350'},20)
        $('h3').html('hiHat button pressed'); 
    
    }

    if (event.which ==  X ) {
        kick.play()
        $('img').animate({ 'width':'340'},20).animate({'width':'350'},20).animate({'width':'350'},20)
        $('h3').html('kick button pressed'); 
    
    }

});

 