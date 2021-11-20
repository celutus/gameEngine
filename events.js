document.addEventListener("keydown",function(event){
	if(event.keyCode == 32)
		running = ! running;
	else if(event.keyCode == 37)
		forward = false;
	else if(event.keyCode == 39)
		forward = true;
})

function fClick()
{
	let xClick = window.event.clientX;
	let yClick = window.event.clientY;
	if(yClick < canvas.height / 2)
		running = ! running;
	else
	{
		if(xClick < canvas.width / 2)
			forward = false;
		else
			forward = true;
	}
}