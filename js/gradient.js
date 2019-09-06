
console.log(window.innerWidth)
console.log(window.innerHeight)

var swingWidth = window.innerWidth;
var gradY = innerHeight/2;

var horizontalPx = swingWidth*-1;
var increasing = true;
setInterval(function(){

	document.body.style.backgroundImage = 'radial-gradient( at ' + horizontalPx+ 'px 50%, #CD844F 1%, #0B042E 80%)';
	document.getElementById("bandname").style.textShadow = (0.02*(horizontalPx-swingWidth/2)*-1) + "px 0 5px #0B042E"

	if (horizontalPx > swingWidth*2) {
		increasing = false;
	}
	else if (horizontalPx < swingWidth*-1 ) {
		increasing = true;
	}
	if (increasing) {
		horizontalPx = horizontalPx + 6;
	}
	else {
		horizontalPx = horizontalPx - 6;
	}
},10);




function getAngleBetweenPoints(p1, p2) {
	return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
}