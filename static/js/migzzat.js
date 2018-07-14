

/*
* 
*  this func is used to make smoth scroll to another part in page 
*  give 'a' tag data-scroll="id" 
*
*  to work called function scrollTo("ul li a",3000,true);
*
*/
function scrollTo(selector,seconds,bool){

	 $(selector).on('click', function (e){
 	        e.preventDefault();

 	        $("html,body").animate({
 	        	scrollTop: $('#' + $(this).data('scroll')).offset().top +1
 	        },seconds);
         /* to work right in css file make selector like this ==> li.active > a{ //props}  */
           if(bool) $(this).parent().addClass('active').siblings().removeClass('active');

 });

}

/*
* 
*  this func is used to make scroll sync with navbar links  
*  give section which is scrolling in class name 'block' 
*
*  to work called function syncNavLinks(".block");
*  and another time on scroll event like :
*
*   $(window).on("scroll",function (){
*	syncNavLinks(".block");
*    });
*
*/
function syncNavLinks(selector){

  $(selector).each(function(){
   if($(window).scrollTop() > $(this).offset().top){
						$("ul li a[data-scroll='"+$(this).attr("id")+"']").parent().addClass('active').siblings().removeClass('active');
					}
				});
}

/*
*  surpassScroll("#scrolltop",220)
*  used with scroll event
*/
function surpassScroll(selector,surpassHeight){

	if($(document).scrollTop() > surpassHeight){
                $(selector).css("display","block");
        }else{
                $(selector).css("display","none");
        }
}

/* 
* scrollToTop("#scrolltop",1700)
* used with onclick event
*/
function scrollToTop(selector,animateTime){
     $(selector).click(function() {
          $("html , body").animate({ scrollTop: 0 }, animateTime);
     });
}


