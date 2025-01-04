window.onload = function(){
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	
	ctx.beginPath();
	ctx.moveTo(92.18,177.55);
	ctx.bezierCurveTo(92.18,177.55,66.36,216.73,79.36,246.09);
	ctx.bezierCurveTo(92.36,275.45,140.73,266.27,144,265.27);
	ctx.bezierCurveTo(147.27,264.27,480,180.33,483.33,179.33);
	ctx.bezierCurveTo(486.67,178.33,118,330.75,124.75,327);
	ctx.bezierCurveTo(131.5,323.25,105.5,338.25,73.5,334.75);
	ctx.bezierCurveTo(40.25,329,30.5,315.5,27,302);
	ctx.bezierCurveTo(22.5,286,30.25,255,48,229);
	ctx.bezierCurveTo(65.75,203,92.18,177.55,92.18,177.55);
	ctx.closePath();
	ctx.fillStyle = 'black';
	ctx.fill();
	ctx.strokeStyle = 'black';
	ctx.stroke();
}