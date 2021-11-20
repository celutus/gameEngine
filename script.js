'use strinct';

const canvas = document.getElementById("canvasId");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 1000;

let programBeginning = new Date();

let fps = 60;
let period = fps ** -1;
let periodMiliseconds = 1000 * period;

let initialAll = [
	[[0,0,0],[2,0,0],[2,2,0],[0,2,0],"#FFF000"],
	[[1, 1, 1], [2, 2, 1], [1, 2, 2], "#CCCCCC"],
	[[-1, -1, -1], [1, -1, -1], [1, -4, 4], [-1, -4, 4], "#FF0000"],

	[[0, 0, 0], [3, 0, 0], 4, "#000000"],
	[[0, 0, 0], [0, 3, 0], 4, "#000000"],
	[[0, 0, 0], [0, 0, 3], 4, "#000000"],

	[[0, 0, 0], 5, "#FF0000"],
	[[1, 1, 1], 5, "#000000"],
	[[2, -2, 0], 5, "#000000"],
	[[7, 1, -3], 5, "#000000"],
	[[-1, -1, -2], 5, "#000000"],
	[[5, 3.9, 7], 5, "#000000"],
	[[4, 0, 2.1], 5, "#000000"],
	[[-2.3, -5, 3], 5, "#000000"],
	[[-6, -3, 5], 5, "#000000"],
	[[2, 3, -2], 5, "#000000"],

	[[0, 0, 0], [2, 2, 2], 2, "#00FF00"],
	[[1, 1, 1], [1, -3, 4], 2, "#00FF00"],
	[[0, 0, 0], [-2, 4, -1.5], 2, "#00FF00"],
	[[-2, 2, 3], [-3, -1, 0.5], 2, "#00FF00"],
	[[1, 0, -2], [4.5, 0, -2], 2, "#00FF00"],

	[[2.5,2,3], [3, 2.5, 3], [2.5, 3, 3], [2, 2.5, 3], "#FF0000"],
	[[3, 2.5, 3], [2.5, 3, 3], [2.5,2.5,4], "#0000FF"],
	[[2.5, 3, 3], [2, 2.5, 3], [2.5,2.5,4]],
	[[2, 2.5, 3], [2.5, 2, 3], [2.5,2.5,4], "#CCCCCC"],
	[[2.5, 2, 3], [3, 2.5, 3], [2.5,2.5,4]],
	[[2.5 ,2.5, 0.5],[2.5,2.5,4], "#000000"],
	[[2.5, 2, 3], [2.5, 2.5, 4]],
	[[2.5, 3, 3], [2.5, 2.5, 4]],
	[[2, 2.5, 3], [2.5, 2.5, 4]],
	[[3, 2.5, 3], [2.5, 2.5, 4], 4, "#FF0000"],
	[[3, 2.5, 3], [2.5, 3, 3]],
	[[2.5, 3, 3], [2, 2.5, 3], 6, "#00FF00"],
	[[2, 2.5, 3], [2.5, 2, 3]],
	[[2.5, 2, 3], [3, 2.5, 3], 2, "#000000"],

	[[0,-0.5,2],[0,0,3], 4, "#000000"],
	[[0,0.5,2],[0,0,3], 4, "#000000"],
];

initialAll = pushCube(initialAll, -4, -4, -4, 2, "#75B7EA", "#336892", "#9FCBED", "#4D97D1", "#D3EBFD", "#0F395A");

let bS = 0.3;
let bH = 4;
let wB = - 9 * bS;

initialAll = pushCube(initialAll, -bS/2, wB + 0 * bS , bH + 4 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 0 * bS , bH + 3 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 0 * bS , bH + 2 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 0 * bS , bH + 1 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 0 * bS , bH + 0 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 1 * bS , bH + 3 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 2 * bS , bH + 2 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 3 * bS , bH + 3 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 4 * bS , bH + 4 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 4 * bS , bH + 3 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 4 * bS , bH + 2 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 4 * bS , bH + 1 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 4 * bS , bH + 0 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");

initialAll = pushCube(initialAll, -bS/2, wB + 6 * bS , bH + 3 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 6 * bS , bH + 2 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 6 * bS , bH + 1 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 7 * bS , bH + 4 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 7 * bS , bH + 0 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 8 * bS , bH + 4 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 8 * bS , bH + 2 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 8 * bS , bH + 0 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 9 * bS , bH + 4 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 9 * bS , bH + 2 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 9 * bS , bH + 1 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 9 * bS , bH + 0 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");

initialAll = pushCube(initialAll, -bS/2, wB + 15 * bS , bH + 4 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 15 * bS , bH + 1 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 15 * bS , bH + 0 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 16 * bS , bH + 4 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 16 * bS , bH + 2 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 16 * bS , bH + 0 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 17 * bS , bH + 3 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");
initialAll = pushCube(initialAll, -bS/2, wB + 17 * bS , bH + 0 * bS , bS, "#00FF6E", "#1C00FF", "#FFEB00", "#FF0000", "#24FF00", "#20BAB8");

//____________________________________________________________________________________________________________________________________________

let time = 0;
let forward = true;
let running = true;

setInterval(function()
{
	let currentAll = copyArray(initialAll);
	
	currentAll.push( [
		add( s1(6,0,0), s2(1, 0, 1) ),
		add( s1(6,0,0), s2(2, 0, 1) ),
		add( s1(6,0,0), s2(2, 0, -1) ),
		add( s1(6,0,0), s2(1, 0, -1) )
	] );
	currentAll.push( [[0,0,0], s1(6,0,0), 4, "#0000FF"] );
	currentAll.push( [s1(6,0,0), add(s1(6,0,0),s2(3,0,0)), 4, "#0000FF"] );
	currentAll.push( [[0,0,0], 4, "#FF0000"] );
	currentAll.push( [s1(6,0,0), 4, "#FF0000"] );
	currentAll.push( [add(s1(6,0,0), s2(3,0,0)), 4, "#000000"] );

	let ang = Math.PI / 71;
	let sfq1 = (63 / 28) * angularFrequency;
	let sfq2 = (51 / 28) * angularFrequency;
	let mv1 = 0.2;
	let mv2 = 0.2;
	let mov3x = 0;

	currentAll.push( [s3(  mov3x + mv1 * Math.sin(sfq1 * (time + 320))  ,  (6 + mv2 * Math.cos(sfq2 * (time + 320))) * Math.cos(8 * ang)  ,  (6 + mv2 * Math.cos(sfq2 * (time + 320))) * Math.sin(8 * ang)), 8, "#000000"] );
	currentAll.push( [s3(  mov3x + mv1 * Math.sin(sfq1 * (time + 280))  ,  (6 + mv2 * Math.cos(sfq2 * (time + 280))) * Math.cos(7 * ang)  ,  (6 + mv2 * Math.cos(sfq2 * (time + 280))) * Math.sin(7 * ang)), 8, "#726B00"] );
	currentAll.push( [s3(  mov3x + mv1 * Math.sin(sfq1 * (time + 240))  ,  (6 + mv2 * Math.cos(sfq2 * (time + 240))) * Math.cos(6 * ang)  ,  (6 + mv2 * Math.cos(sfq2 * (time + 240))) * Math.sin(6 * ang)), 8, "#ADA300"] );
	currentAll.push( [s3(  mov3x + mv1 * Math.sin(sfq1 * (time + 200))  ,  (6 + mv2 * Math.cos(sfq2 * (time + 200))) * Math.cos(5 * ang)  ,  (6 + mv2 * Math.cos(sfq2 * (time + 200))) * Math.sin(5 * ang)), 8, "#F0E200"] );
	currentAll.push( [s3(  mov3x + mv1 * Math.sin(sfq1 * (time + 160))  ,  (6 + mv2 * Math.cos(sfq2 * (time + 160))) * Math.cos(4 * ang)  ,  (6 + mv2 * Math.cos(sfq2 * (time + 160))) * Math.sin(4 * ang)), 8, "#FFF54D"] );
	currentAll.push( [s3(  mov3x + mv1 * Math.sin(sfq1 * (time + 120))  ,  (6 + mv2 * Math.cos(sfq2 * (time + 120))) * Math.cos(3 * ang)  ,  (6 + mv2 * Math.cos(sfq2 * (time + 120))) * Math.sin(3 * ang)), 8, "#FFF888"] );
	currentAll.push( [s3(  mov3x + mv1 * Math.sin(sfq1 * (time + 080))  ,  (6 + mv2 * Math.cos(sfq2 * (time + 080))) * Math.cos(2 * ang)  ,  (6 + mv2 * Math.cos(sfq2 * (time + 080))) * Math.sin(2 * ang)), 8, "#FFF54D"] );
	currentAll.push( [s3(  mov3x + mv1 * Math.sin(sfq1 * (time + 040))  ,  (6 + mv2 * Math.cos(sfq2 * (time + 040))) * Math.cos(1 * ang)  ,  (6 + mv2 * Math.cos(sfq2 * (time + 040))) * Math.sin(1 * ang)), 8, "#FFFCCB"] );
	currentAll.push( [s3(  mov3x + mv1 * Math.sin(sfq1 * (time + 000))  ,  (6 + mv2 * Math.cos(sfq2 * (time + 000))) * Math.cos(0 * ang)  ,  (6 + mv2 * Math.cos(sfq2 * (time + 000))) * Math.sin(0 * ang)), 8, "#FFFFFF"] );


	restartCanvas();
	draw(   sortElements( changeBase(currentAll) )    , scale);

	if(running)
	{
		if(forward)
			time += periodMiliseconds;
		else
			time -= periodMiliseconds;
	}
	drawText(`Real time: ${parseInt((new Date() - programBeginning) / 1000)}s`, 5, 5);
	drawText(`Local time: ${parseInt(time / 1000)}s`, 5, 20);
	drawText(`Elements on scene: ${currentAll.length}`, 5, 35);
}, periodMiliseconds);

function restartCanvas(){
	canvas.width = canvas.width;
	canvas.height = canvas.height;
}

function sortElements(elements)
{
	let allMaximumXCoordinates = [];
	for(let i = 0; i < elements.length; i ++)
	{
		allMaximumXCoordinates[i] = - Infinity;
		for(let j = 0; j < elements[i].length; j ++)
		{
			if(typeof(elements[i][j]) == "object")
			{
				if(elements[i][j][0] > allMaximumXCoordinates[i])
					allMaximumXCoordinates[i] = elements[i][j][0];
			}
		}
	}

	let indexSorted = [];
	for(let i = 0; i < allMaximumXCoordinates.length; i ++)
	{
		let indexOfminValue;
		let minValue = Infinity;
		for(let j = 0; j < allMaximumXCoordinates.length; j ++)
		{
			if( ! valueInArray(j, indexSorted) )
			{
				if(allMaximumXCoordinates[j] < minValue)
				{
					indexOfminValue = j;
					minValue = allMaximumXCoordinates[j];
				}
			}
		}
		indexSorted.push(indexOfminValue);
	}


	let sortedElements = [];
	for(let i = 0; i < indexSorted.length; i ++)
		sortedElements[i] = copyArray(elements[indexSorted[i]]);
	return sortedElements;
}


let angularFrequency = (2 * Math.PI) / 1000;

let initialVarphi = (2 * Math.PI) / 15;
let initialTheta = - (2 * Math.PI) / 15;
let varphiFreq = (5 / 120) * angularFrequency;
let thetaFreq = - (0 / 88) * angularFrequency;

let initialAngle1 = 0 * Math.PI;
let initialAngle2 = 0 * Math.PI;
let initialAngle3 = 0 * Math.PI;
let freq1 = (1 / 4) * angularFrequency;
let freq2 = (5 / 4) * angularFrequency;
let freq3 = (5 / 28) * angularFrequency;

function normTheta(theta)
{
	while(theta > 2 * Math.PI)
		theta -= 2 * Math.PI;	
	while(theta < 0)
		theta += 2 * Math.PI;
	if(theta > (1 / 2) * Math.PI && theta < (3 / 2) * Math.PI)
		theta = Math.PI - theta;
	return theta;
}

function v1(x, y = 0, z = 0)
{
	let vector;
	if(typeof(x) == "object")
		vector = x;
	else
		vector = [x,y,z];
	let varphi = initialVarphi + varphiFreq * time;
	let matrixViewerQ10 = [
		[Math.cos(varphi), Math.sin(varphi), 0],
		[-Math.sin(varphi), Math.cos(varphi), 0],
		[0, 0, 1]
	];
	return mul(matrixViewerQ10, vector);
}

function v2(x, y = 0, z = 0)
{
	let vector;
	if(typeof(x) == "object")
		vector = x;
	else
		vector = [x,y,z];
	let theta = normTheta(initialTheta + thetaFreq * time);
	let matrixViewerQ21 = [
		[Math.cos(theta), 0, -Math.sin(theta)],
		[0, 1, 0],
		[Math.sin(theta), 0, Math.cos(theta)]
	];
	return mul(matrixViewerQ21, v1(vector));
}

function changeBase(elementsBase0)
{
	let elementsBase2 = [];
	for(let i = 0; i < elementsBase0.length; i ++)
	{
		elementsBase2.push([]);
		for(let j = 0; j < elementsBase0[i].length; j ++)
		{
			if(typeof(elementsBase0[i][j]) == "object")
				elementsBase2[i].push(  v2(elementsBase0[i][j])  );
			else
				elementsBase2[i].push(elementsBase0[i][j]);
		}
	}
	
	return elementsBase2;
}


function s1(x, y = 0, z = 0)
{
	let vector;
	if(typeof(x) == "object")
		vector = x;
	else
		vector = [x,y,z];
	let angle1 = initialAngle1 + freq1 * time;
	let matrixQ01 = [
		[Math.cos(angle1), - Math.sin(angle1), 0],
		[Math.sin(angle1), Math.cos(angle1), 0],
		[0, 0, 1]
	];
	return mul(matrixQ01, vector);
}

function s2(x, y = 0, z = 0)
{
	let vector;
	if(typeof(x) == "object")
		vector = x;
	else
		vector = [x,y,z];
	let angle2 = initialAngle2 + freq2 * time;
	let matrixQ12 = [
		[Math.cos(angle2), 0, Math.sin(angle2)],
		[0, 1, 0],
		[ - Math.sin(angle2), 0, Math.cos(angle2)]
	];
	return s1(mul(matrixQ12, vector));
}

function s3(x, y = 0, z = 0)
{
	let vector;
	if(typeof(x) == "object")
		vector = x;
	else
		vector = [x,y,z];
	let angle3 = initialAngle3 + freq3 * time;
	let matrixQ01 = [
		[1, 0, 0],
		[0, Math.cos(angle3), - Math.sin(angle3)],
		[0, Math.sin(angle3), Math.cos(angle3)]
	];
	return mul(matrixQ01, vector);
}