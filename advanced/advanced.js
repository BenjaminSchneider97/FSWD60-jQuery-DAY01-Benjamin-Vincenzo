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

	var array = ["New Template", "Order Template", "Contact Us"];
		for(i=0; i < array.length; i++){
			$(".sidemenu").append("<li><a href='http://all-free-download.com/free-website-templates/'>" + array[i] + "</a></li>");
		}

	$("a[href]").attr("href", "http://www.codefactory.wien/");
	$("#sidebar p:first").text('"When someone says: "I want a programming language in which I need only to say what I wish, and done", give him a lollipop."');
});



