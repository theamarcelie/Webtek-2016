
var modal = document.getElementById("the_modal");
var img = document.getElementsByClassName("smallImage");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var shownImage;

for (i=0; i<6; i++){
	console.log(img[i]);
	console.log(i);
	
	rightBtn.onclick = function(){
	
	if (shownImage!="5"){
		var number = parseInt(shownImage);
		number=number+1;
		var string = number.toString();
		
		document.getElementById(string).click();
	}
	}
	
	leftBtn.onclick = function(){
	
	if (shownImage!="0"){
		var number = parseInt(shownImage);
		number=number-1;
		var string = number.toString();
		
		document.getElementById(string).click();
	}
	}

	img[i].onclick = function() {
		
		modal.style.display = "block";
		shownImage=this.id;
		modalImg.src=this.src
		captionText.innerHTML= this.alt;
		console.log(shownImage);
		
	}
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
	modal.style.display = "none";
}


