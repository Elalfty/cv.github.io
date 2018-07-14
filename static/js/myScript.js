(()=>{
    
         scrollTo("ul li a",3000,true);
    
     $(window).on("scroll",function (){
 	      syncNavLinks(".block");
     });
    
})();
    
