
function special(){
$("#face").fadeOut();
$("#face").fadeIn()
}
function verySpecial()
{
		setInterval(function()
		{ 
			$('body').css ("background-color",getRandomColor());
		}, 100);
		document.getElementById("clickMe").disabled=true;
}
function getRandomColor()
 {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ )
	{
		color += letters[Math.floor(Math.random() * 16)];
	}
	x=false;
	return color;
}