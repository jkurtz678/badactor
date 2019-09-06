
console.log(window.innerWidth)
console.log(window.innerHeight)

var swingWidth = window.innerWidth;
var gradY = innerHeight/2;

var horizontalPx = swingWidth*-1;
var increasing = true;

elements = document.getElementsByClassName("shadowAnimated");
console.log("elements length: " + elements.length);

var style = window.getComputedStyle(elements[2], null).getPropertyValue('font-size');
var fontSize = parseFloat(style); 
console.log("fontSize: " + fontSize);

setInterval(function(){

	document.body.style.backgroundImage = 'radial-gradient( at ' + horizontalPx+ 'px 50%, #CD844F 0%, #0B042E 99%)';
	//document.getElementById("bandname").style.textShadow = (0.02*(horizontalPx-swingWidth/2)*-1) + "px 0 5px #0B042E"
	//elements[0].style.textShadow = (0.02*(horizontalPx-swingWidth/2)*-1) + "px 0 5px #0B042E"
	var i;
	for(i = 0; i < elements.length; i++ ) {
		addDirectionalShadow(elements[i], horizontalPx, gradY );
	}
	//addDirectionalShadow(elements[0], horizontalPx, gradY);

	if (horizontalPx > swingWidth*2) {
		increasing = false;
	}
	else if (horizontalPx < swingWidth*-1 ) {
		increasing = true;
	}
	if (increasing) {
		horizontalPx = horizontalPx + 5;
	}
	else {
		horizontalPx = horizontalPx - 5;
	}
},10);


function addDirectionalShadow(element, lightX, lightY) {

	var rect = element.getBoundingClientRect();
	var elementX = rect.left + (rect.right-rect.left)/2;
	var elementY = rect.bottom + (rect.bottom-rect.top)/2;

	var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
	var fontSize = parseFloat(style); 

	//console.log("elementX: " + elementX);
	//console.log("elementY: " + elementY);

	//console.log("lightX: " + lightX);

	//console.log("lightY: " + lightY);


	var scalar = 0.0001 * fontSize;

	//var scalarY = 0.015;

	//var distance = getDistance(elementX, elementY, lightX, lightY) * scalar;
	//var angle = getAngle(elementX, elementY, lightX, lightY);

	var xShadow = scalar*(elementX - lightX);
	var yShadow = scalar*(elementY - lightY);

	if( element instanceof HTMLImageElement ) {
		element.style.boxShadow = xShadow*5 + "px " + yShadow*5 + "px 20px #0B042E"
	}
	else {
		element.style.textShadow = xShadow + "px " + yShadow + "px " + (scalar*800) +  "px #0B042E"
	}
}

function getDistance(x1, y1, x2, y2) {
	var a = x1 - x2;
	var b = y1 - y2;
	return Math.sqrt( a*a + b*b );
}

function getAngle(x1, y1, x2, y2) {
	return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}