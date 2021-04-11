var i=0;
var imagefiles=['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg'];
window.setInterval(startSlider,2000);

function startSlider()
{
	document.getElementById("topimg").src="css/images1/home/"+imagefiles[i];
	i++;
	if(i>4)
	{
		i=0;
	}
}

var j=0;
var image_files=['a.jpg','b.jpg','c.jpg','d.jpg'];
window.setInterval(startsSlider,1000);

