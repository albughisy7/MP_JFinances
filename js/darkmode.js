// localStorage.clear();
var darkmode = localStorage.getItem('darkmode') || 0;

if(darkmode==0){
    darkmode_active();
    // alert('jun');
}else{
    darkmode_nonactive();
    // alert('jun2');
}

function darkmode_active(){
    $('.fa-sun-o').addClass('fa-moon-o').removeClass('fa-sun-o');
    $('.change-theme').removeClass('darkmode');
    darkmode = 0;
    localStorage.setItem("darkmode", "0");
}

function darkmode_nonactive(){
    $('.fa-moon-o').addClass('fa-sun-o').removeClass('fa-moon-o');
    $('.change-theme').addClass('darkmode');
    darkmode = 1;
    localStorage.setItem("darkmode", "1");
}

// DARK MODE
$(document).ready(function () { 
    $(".nav-right").on('click', 'i.fa-moon-o', function () {
        darkmode_nonactive();
    });

    $(".nav-right").on('click', 'i.fa-sun-o', function () {
        darkmode_active();
    });
});

var showmenu = 0;
$('.show-menu').click(function(){
    if (showmenu == 0) { // If media query matches
        $('.menu-mobile').css({"display":"flex"});
        showmenu =1;
    } else {
        $('.menu-mobile').css({"display":"none"});
        showmenu =0;
    }
});