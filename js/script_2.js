document.addEventListener("DOMContentLoaded", function(){
// make it as accordion for smaller screens
if (window.innerWidth > 992) {
	document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
		everyitem.addEventListener('mouseover', function(e){
			let el_link = this.querySelector('a[data-bs-toggle]');
			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.add('show');
				nextEl.classList.add('show');
                el_link.setAttribute('aria-expanded', 'true');
                nextEl.setAttribute('data-bs-popper', 'none');
			}
		});
		everyitem.addEventListener('mouseleave', function(e){
			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.remove('show');
				nextEl.classList.remove('show');
                el_link.setAttribute('aria-expanded', 'false');
                
                nextEl.removeAttribute('data-bs-popper');


			}
		})
	});
}
// end if innerWidth
}); 
// DOMContentLoaded  end

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});


$('.scrollup').click(function() {
    $("html, body").animate({scrollTop:0},500);
});


window.onload = function(){ 
if(document.getElementById('menu_body')!= null){
    var meny_top_body = $('#menu_body');
    var headermenu_body = $('#headermenu_body');
    var headermenu_body_height = meny_top_body.height();
    var meny_top = headermenu_body.position().top;
    headermenu_body.css('height', (headermenu_body_height+4));
    
    
    $(window).scroll(function() {
        //Приипающее меню
        if ($(this).scrollTop() > meny_top) {
            meny_top_body.addClass("bg-white");
        }else{
            meny_top_body.removeClass("bg-white");
        }
        //Приипающее меню
        
        //scrollup
        if ($(this).scrollTop()>200) {
            $('.scrollup').fadeIn();
        }else {
            $('.scrollup').fadeOut();
        }
        //scrollup
    });
}
};


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function modal_close_open(close,open) {
    let modal = document.getElementById(close);
    let myModal = bootstrap.Modal.getOrCreateInstance(modal);
    myModal.hide();
    sleep(2000);
    let modalTwo = document.getElementById(open);
    let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
    //window.setTimeout(_ => exampleModal.show(), 3000)
    exampleModal.show();
}


function modal_url_open(open,time){
    if(time){sleep(time);}
    let modalTwo = document.getElementById(open);
    let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
    exampleModal.show();
}
function modal_show(open){
    if(open=='reg_ok'){
    //try{ym(00000,'reachGoal','reg');}catch(e){}
    }
    let modalTwo = document.getElementById(open);
    let exampleModal = bootstrap.Modal.getOrCreateInstance(modalTwo);
    exampleModal.show();
}



(function ($) {

	/*----- maxitup -----*/		
	$(function(){
	$('.project_maxitup').mixItUp();
	});
    
    
})(jQuery);

$(document).ready(function () {
    if ($('#type-it').length > 0) {
new TypeIt("#type-it", {
  //strings: [" программного обеспечения", " к разработке мобильных приложений", " к разработке сайтов"],
  speed: 150,
  loop: true,
  breakLines: false
})
.delete(1)
.type(" к разработке<br>")
.pause(300)
.type(" программного обеспечения")
.pause(1500)
.delete(25)
.pause(300)
.type(" сайтов")
.pause(1500)
.delete(7)
.pause(300)
.type(" мобильных приложений")
.pause(1500)
.delete(21)
.pause(300)
.delete(17)
.pause(300)
.type(" в SEO продвижении")
.pause(1500)
.delete(18)
.pause(300)
.type(" в SMM продвижении")
.pause(1500)
.delete(18)
.pause(300)
.type(" в контекстной рекламе")
.pause(1500)
.delete(22)
.pause(300)
.type(" к технической поддержке<br>")
.pause(300)
.type(" компьютеров")
.pause(1500)
.delete(12)
.pause(300)
.type(" сайтов")
.pause(1500)
.delete(7)
.pause(300)
.type(" мобильных приложений")
.pause(1500)
.go();
        
        

    }
});
    