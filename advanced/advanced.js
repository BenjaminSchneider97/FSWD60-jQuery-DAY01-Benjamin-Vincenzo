$(document).ready(function(){
	$("code").css("color","red");
	$("ol>li").css("background-color", "#2a7b90");
	$("form>p>textarea").attr("placeholder", "Express your opinion");
	$("blockquote > p").css({
		"background-color" : "orange",
		"font-style" : "italic"
		});
	$("#logo").css("color","black");
	$(".gray").css("color", "white");
	$(".date").remove();

	var threeList = $("<li><a href='http://all-free-download.com/free-website-templates/'>New Template</a></li>");
	$(".sidemenu").append(threeList);

	$("a[href]").attr("href", "http://www.codefactory.wien/");
});



