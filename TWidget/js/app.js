function allowDrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");

	
	if ( data == "twitterImage" ){
		if(ev.target.id == "sidebar" ){
			ev.target.appendChild(document.getElementById(data));
		} 
		else 
		{
			return;
		}
	} else if (data == "article"){
		if(ev.target.id == "articleTop" || ev.target.id == "articleBottom"){
			ev.target.appendChild(document.getElementById(data));
		} else {
			return;
		}
	}	
	  else if (data == "twitterContainer"){
		if(ev.target.id == "sidebar" || ev.target.id == "sidebar2" ){
			ev.target.appendChild(document.getElementById(data));
		} else {
			return;
		}	
	}
}