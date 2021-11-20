

function drawSquare(x, y, w, h, color)
{
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.fillStyle = color; 
	ctx.fill();
	ctx.closePath();
}

function drawCircumference(ctxParameter, x, y, radius, startAngle, endAngle, counterClockwise, color)
{
    ctxParameter.beginPath();
	ctxParameter.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    ctxParameter.strokeStyle = color;
    ctxParameter.stroke();
    ctxParameter.closePath();
}

function drawCircle(x, y, radius, startAngle, endAngle, counterClockwise, color)
{
	ctx.beginPath();
	ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawLine(x0, y0, x1, y1, lineWidth, color)
{
	ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

function drawPolygon(arrayOfElements, color)
{
    ctx.beginPath();
    ctx.moveTo(arrayOfElements[0][0], arrayOfElements[0][1]);
    for(let i = 1; i < arrayOfElements.length; i ++)
        ctx.lineTo(arrayOfElements[i][0], arrayOfElements[i][1]);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawText(text, x = 0, y = 0)
{
    ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.font = "11pt Times New Roman";
	ctx.fillStyle = "#000000";
	ctx.fillText(text, x, y);
}