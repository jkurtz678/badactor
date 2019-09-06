
console.log(window.innerWidth)
console.log(window.innerHeight)

var minLight = 95; 
var lightRange = 20;
var swingWidth = window.innerWidth;
var halfwayY = window.innerHeight/2
var gradY = halfwayY;
var centerX = swingWidth/2;
var centerY = window.innerHeight/2;


var gradX = swingWidth*-1;
var circleBack = false;
var circleRadius = swingWidth+(swingWidth/2);
var angle = 0;

console.log("inner height: " + window.innerHeight/2);
console.log("gradY: " + gradY);

elements = document.getElementsByClassName("shadowAnimated");

setInterval(function(){
	var lightRatio = getLightRatio(swingWidth, gradX)
	var lightPercentage = (lightRatio*lightRange) + minLight;
	document.body.style.backgroundImage = 'radial-gradient( at ' + gradX+ 'px '+ gradY +'px, #CD844F 0%, #0B042E '+lightPercentage+'%)';
	var i;
	for(i = 0; i < elements.length; i++ ) {
		addDirectionalShadow(elements[i], gradX, gradY, lightRatio );
	}
	if (gradX > swingWidth*2) {
		circleBack = true;
		gradY = halfwayY;
		angle = 0;
	}
	if (gradY < halfwayY) {
		circleBack = false;
		gradY = halfwayY;
	}
	if(circleBack) {
		gradX = centerX + (Math.cos(angle)*circleRadius);
		gradY = centerY + ((Math.sin(angle)*circleRadius)*0.3);
		angle = angle + Math.PI/840;
	}
	else {
		gradX = gradX + 5;
	}
	//console.log("gradX " + gradX);
	//console.log("gradY " + gradY);
	//console.log("window inner height " + window.innerHeight/2);


	//console.log("is circling back: " + circleBack);
},10);


function addDirectionalShadow(element, lightX, lightY, lightRatio) {

	var rect = element.getBoundingClientRect();
	var elementX = rect.left + (rect.right-rect.left)/2;
	var elementY = rect.top + (rect.bottom-rect.top)/2;

	var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
	var fontSize = parseFloat(style); 

	var scalar = 0.0001 * fontSize;
	var shineScaler = .004*fontSize;

	var xShadow = scalar*(elementX - lightX);
	var yShadow = scalar*(elementY - lightY);

	var xShineCenterRelative = shineScaler*(lightX-elementX );
	var yShineCenterRelative = shineScaler*(lightY-elementY );
	var xShine = elementX - rect.left + xShineCenterRelative;
	var yShine = elementY - rect.top + yShineCenterRelative;

	var alpha = (lightRatio*.6) + .4;
	if( element instanceof HTMLImageElement ) {
		element.style.boxShadow = xShadow*7 + "px " + yShadow*7 + "px 15px rgba(11,4,46,"+alpha+')'
	}
	else {
		console.log("running...: " + lightX);

		element.style.background = 'radial-gradient(at ' + xShine + 'px ' + yShine + 'px, #fffcd3 0%, #BC7248 80%)';
		element.style.webkitBackgroundClip = 'text';
		element.style.webkitTextFillColor = 'transparent';

		//element.style.textShadow = xShadow + "px " + yShadow + "px " + (scalar*800) + "px rgba(11,4,46,"+alpha+')';
		element.style.webkitFilter = 'drop-shadow(' + xShadow + "px " + yShadow + "px " + (scalar*800) + "px rgba(11,4,46,"+alpha+'))';
		element.style.filter = 'drop-shadow(' + xShadow + "px " + yShadow + "px " + (scalar*800) + "px rgba(11,4,46,"+alpha+'))';
	}
}

function getLightRatio(swingWidth, horizontalPx) {
	var posHorizontalPx = horizontalPx + swingWidth;
	var centerPoint = swingWidth+swingWidth/2;
	return 1 - (Math.abs(centerPoint - posHorizontalPx)/centerPoint);
}

function getDistance(x1, y1, x2, y2) {
	var a = x1 - x2;
	var b = y1 - y2;
	return Math.sqrt( a*a + b*b );
}

function getAngle(x1, y1, x2, y2) {
	return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}