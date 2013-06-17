$(function(){
	$('#h .nav .l1').hover(function(){
		$(this).addClass('active1').children('ul').css('display','block');
		},function(){
			$(this).removeClass('active1').children('ul').css('display','none');
			})
	$('#b .nav1 li').hover(function(e) {
        $(this).addClass('active2').siblings().removeClass('active2');
    });
	$(".m2").click(function(e) {
            $("body, html").animate({scrollTop:0},1000);
			return false;
        });
})