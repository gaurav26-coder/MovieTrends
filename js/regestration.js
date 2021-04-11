function checkFormEntry()
{
	document.getElementById("errorMessage").innerHTML="";
	document.getElementById("successMessage").innerHTML="";
	
	var errors="";
	if(document.getElementById("name1").value.length<3)
	{
		errors +="Enter Your correct Name.<br>";
	}
	if(document.getElementById("name2").value.length<5)
	{
		errors +="Please Enter a valid Surname <br>";
	}
	
	if(document.getElementById("address").value.length<5)
	{
		errors +="Location Must be 5 characters.<br>";
	}
	if(document.getElementById("phone").value.length<10)
	{
		errors +="COntact Number must be 10 digit.<br>";
	}
	
	if(document.getElementById("email").value.length<10)
	{
		errors +="Enter a Valid Email Address.<br>";
	}
	if(errors!="")
	{
		document.getElementById("errorMessage").innerHTML=errors;
	}
	else{
		window.location.href="index.html";
		alert("Your Details are registered. ")
	}
	return false; 
}

document.getElementById("form").onsubmit=checkFormEntry;