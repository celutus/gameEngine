

const scale = 40;
const spaceWords = 5;

function scaleElement(element, varScale)
{
	let copyElement = copyArray(element);
	for(let i = 0; i < copyElement.length; i ++)
	{
		if(typeof(copyElement[i]) == "object")
		{
			for(let j = 0; j < copyElement[i].length; j ++)
				copyElement[i][j] *= varScale;
		}
	}
	return copyElement;
}

function dimensions(element)
{
	let varDimensions = - 1;
	for(let i = 0; i < element.length; i ++)
	{
		if(typeof(element[i]) == "object")
			varDimensions ++;
		else
			break;
		if(varDimensions == 2)
			break;
	}
	return varDimensions
}

function draw(elements, varScale)
{
	for(let i = 0; i < elements.length; i ++)
	{
		if(dimensions(elements[i]) == 0)
			drawPoint(    scaleElement(elements[i], varScale)	);
		else if(dimensions(elements[i]) == 1)
			drawStraight(    scaleElement(elements[i], varScale)    );
		else if(dimensions(elements[i]) == 2)
			drawFlat(    scaleElement(elements[i], varScale)    );
	}
}

function drawPoint(element)
{
	drawCircle(canvas.width/2+element[0][1] , canvas.height/2-element[0][2], element[1], 0, 2 * Math.PI, true, element[2]);
}

function drawStraight(element)
{
	drawLine( canvas.width/2+element[0][1] , canvas.height/2-element[0][2] , canvas.width/2+element[1][1] , canvas.height/2-element[1][2] , element[2], element[3]);
}

function drawFlat(element)
{
	ctx.beginPath();
    ctx.moveTo(canvas.width/2+element[0][1] , canvas.height/2-element[0][2]);
	let i = 1;
    while(typeof(element[i]) == "object")
	{
		ctx.lineTo(canvas.width/2+element[i][1] , canvas.height/2-element[i][2]);
		i ++;
	}
    ctx.fillStyle = element[i];
    ctx.fill();
    ctx.closePath();
}

function pushCube(arrayOfElements, x, y, z, size, bColor, fColor, lColor, rColor, dColor, uColor)
{
	if(fColor == undefined)
	{
		fColor = bColor;
		lColor = bColor;
		rColor = bColor;
		dColor = bColor;
		uColor = bColor;
	}
	arrayOfElements.push( [[x,y,z], [x, y+size, z], [x, y+size, z+size], [x, y, z+size], bColor] );
	arrayOfElements.push( [[x+size,y,z], [x+size, y+size, z], [x+size, y+size, z+size], [x+size, y, z+size], fColor] );
	arrayOfElements.push( [[x,y,z], [x+size, y, z], [x+size, y, z+size], [x, y, z+size], lColor] );
	arrayOfElements.push( [[x,y+size,z], [x+size, y+size, z], [x+size, y+size, z+size], [x, y+size, z+size], rColor] );
	arrayOfElements.push( [[x,y,z], [x+size, y, z], [x+size, y+size, z], [x, y+size, z], dColor] );
	arrayOfElements.push( [[x,y,z+size], [x+size, y, z+size], [x+size, y+size, z+size], [x, y+size, z+size], uColor] );
	return arrayOfElements;
}