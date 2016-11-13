/*
FILE NAME: resize.js
WRITTEN BY: Jørgen Molaug
WHEN: October 2016
PURPOSE: Get in contact */
var modal = document.getElementById("the_modal");
var img = document.getElementsByClassName("smallImage");
/* This returns a list of the six images with class "smallImage"*/
var modalImg = document.getElementById("modalImage");
/*This is the image that pops up*/
var captionText = document.getElementById("caption");
var shownImage;
/*this is the image currently blown up*/

for (i=0; i<6; i++){
/*Iterate through the list of the six images*/
	
	rightBtn.onclick = function(){
	/*If the right arrow button is pressed, simulate a click on the next image in line.
	An exception is the final picture, that will link to the first one*/
	
	if (shownImage!="img5"){
		shownImage = shownImage.slice(3,4);
		var number = parseInt(shownImage);
		number=number+1;
		var imgId = "img";
		var string = number.toString();
		string = imgId.concat(string);

		document.getElementById(string).click();
	}
	else{
		var number=0;
		var imgId = "img";
		var string = number.toString();
		string = imgId.concat(string);
		
		document.getElementById(string).click();
	}
	}
	
	leftBtn.onclick = function(){
	/*If the left arrow button is pressed, simulate a click on the previous image in line.
	An exception is the first picture, that will link to the final one*/
	if (shownImage!="img0"){
		shownImage = shownImage.slice(3,4);
		var number = parseInt(shownImage);
		number=number-1;
		var imgId = "img";
		var string = number.toString();
		string = imgId.concat(string);

		document.getElementById(string).click();
	}
	else{
		var number=5;
		var imgId = "img";
		var string = number.toString();
		string = imgId.concat(string);
		
		document.getElementById(string).click();
	}
	}

	img[i].onclick = function() {
		
		modal.style.display = "block";
		/*make the modal visible*/
		shownImage=this.id;
		/*store which image is up in a variable*/
		modalImg.src=this.src
		/*put in the clicked picture's source as souurce for the popup-picture*/
		captionText.innerHTML= this.alt;
		/*put in the clicked picture's alt as a text underneath the picture*/
		
	}
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
	/*make the modal invisible again if the close button is clicked*/
	modal.style.display = "none";
}


