/*$("form").submit(function(e) {

	e.preventDefault();

});*/

$(document).ready(function(){
	var cnt = $("#myform").contents();
	$("#myform").replaceWith(cnt);
	var $fivedivs;
		for (i=0; i<5; i++){
			$fivedivs = $("<div class='box'>").text(i);
			$("article").append($fivedivs);
		}
	$("[value='HELLO!']").val("Search for...");
	$("[href='http://www.codefactory.com/']").attr("href", "http://www.codefactory.wien/");
});

