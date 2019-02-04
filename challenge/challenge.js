
function getgroceries(){
	for(i=0; i < grocery.length; i++){
		groceries(i);
	}
}

function groceries(index){
	var items = document.getElementById("container");

	var containerdiv = document.createElement("div");
	var imgdiv = document.createElement("div");
	var data = document.createElement("div");
	var a = document.createElement("img");
	a.setAttribute("src", grocery[index].image);
	a.setAttribute("class", "image");

	imgdiv.appendChild(a);

	items.appendChild(imgdiv);
}

getgroceries();