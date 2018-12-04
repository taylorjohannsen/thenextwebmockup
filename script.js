// jQuery function to get "ad1" to change from a .png to a .gif on hover
$(document).ready(function()
{
    $("#imgAnimate").hover(
        function()
        {
            $(this).attr("src", "./photos/ad1.gif");
        },
        function()
        {
            $(this).attr("src", "./photos/ad1.png");
        });
});

// Function to set timer
var countDownDate = new Date("Dec 31, 2018 15:27:25").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // if statements to add a '0' if the number is single digit 
    if (hours <= 9) {
        hours = '0' + hours;
    }
    if (seconds <= 9) {
        seconds = '0' + seconds;
    }
    if (days <= 9) {
        days = '0' + days;
    }
    if (minutes <= 9) {
        minutes = '0' + minutes;
    }

    document.getElementById('countDown').innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds + "";
}, 1000);

// Setting up injectStyles function to change css classes when scrolling
function injectStyles(rule) {
    var div = $("<div />", {
      html: '&shy;<style>' + rule + '</style>'
    }).appendTo("body");    
  }

// Function to add scrolling sticky navbar
$(document).ready(function() {
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('.nav').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky'); 
        }
        // if-else statement to have photo show up on navbar on scroll
        if (scrollTop > stickyNavTop) { 
            document.getElementById("hiddenLogo").style.display = "";
        } else {
            document.getElementById("hiddenLogo").style.display = "none";
        }
        // Function to change a css class on scroll
        if (scrollTop > stickyNavTop) {
            injectStyles('.freeTicket { margin-left: 5.5%; }');
        } else {
            injectStyles('.freeTicket { margin-left: 0%; }');
        }
        
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});