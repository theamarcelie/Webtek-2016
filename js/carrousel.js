var ul;
var li_items; 
var li_number;
var slider_width = 0;
var image_width;
var current = 0;
var Nid;
var imgP;
var id; //global to allow click to manipulate


function init(){	
	ul = document.getElementById('image_slider');
	li_items = ul.children;
	li_number = li_items.length;
	for (i = 0; i < li_number; i++){
			image_width = li_items[i].childNodes[0].clientWidth;
			slider_width += image_width;
	}
		ul.style.width = parseInt(slider_width) + 'px';
	slider(ul);
//calculates length of entire carrousel and sets the width of ul to it and sends ul to slider "width as a string eg "1234px"


for (i = 0; i < li_number-1; i++){				//-1 here because you dont want cloned last image to be an option
	
	
	var btn = document.createElement("input");        	// Create a <button> element
	btn.setAttribute("type","button");
	btn.setAttribute("id","n"+i);
	btn.setAttribute("value","\u260C");
	btn.setAttribute("class","imgbtn");		
	btn.onclick = function(){click(this.id)};  //place function in function to pass arguments
	document.getElementById("button").appendChild(btn);                    	// Append <button> to <body>
}



}

function slider(){		
		animate({
			delay:17,
			duration: 3000,
			delta:function(p){return Math.max(0, -1+ 2 * p)}, //returns the highest number
			//turns the carrousell
			step:function(delta){ul.style.left = '-' + parseInt(current * image_width + delta * image_width) + 'px';},

			callback:function(){
				current++;
				if(current < li_number-1){
					imgP = setTimeout(slider, 5000); //time it pauses at new image
				}
				else{					
					current = 0;				
					setTimeout(slider, 0);
				}
			}
		});

//sends a list of arguments to animate 
}

//runs animate every "delay variable"
function animate(opts){
	var start = new Date;
	id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed / opts.duration
		if(progress > 1){
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if (progress == 1){
			clearInterval(id);	//ends animate loop
			opts.callback();
		}
	}, opts.delay);
}


function click(Nid){ 
	console.log("event");
	var str = Nid.slice(1);
	var num = Number(str);
	current = num;
	clearTimeout(imgP);	//turns off the slider and starts a new one at the indicated img
	clearInterval(id);
	slider();
	
}
window.onload = init;
