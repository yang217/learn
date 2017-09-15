$(function(){
	
	$('.r1 h3').click(function(event){
		event.stopPropagation(); 	
        $(this).next('ul').toggle();
		//$(this).toggleClass('h3-on');
    })
    $('.r1 li li').click(function(event){
		 event.stopPropagation(); 	
		 //$(this).parents('li').find('h3').removeClass('h3-on');
         $(this).parents('li').find('ul').hide();
         $(this).parents('li').find('h3').html(($(this).text()));     
    })
	$('.r1 li li.summer').click(function(event){
		 $('.season-exp p').hide();
		 $('.season-exp p:nth-child(1)').show();
    })
	$('.r1 li li.autumn').click(function(event){
		 $('.season-exp p').hide();
		 $('.season-exp p:nth-child(2)').show();
    })
	$('.r1 li li.winter').click(function(event){
		 $('.season-exp p').hide();
		 $('.season-exp p:nth-child(3)').show();
    })
	$('.r1 li li.spring').click(function(event){
		 $('.season-exp p').hide();
		 $('.season-exp p:nth-child(4)').show();
    })
	$(document).click(function(){
		$('.r1 h3').removeClass('h3-on');
		$('.r1 li ul').hide();					   
	})//select选项
	
	$('.m2').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	
	$('.findevents').click(function(){
		$('.filter-wrap').toggle();
		$(this).toggleClass('findevents-up');
	})
});