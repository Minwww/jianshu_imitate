$(document).ready(function(){
	$('.sort-nav li').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	})

	var n=0;
	$('.btn_more').click(function(){
		$('.category_more').eq(n).show();
		n++;
	})
})