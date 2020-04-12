var random;
	random=Math.floor((Math.random()*10)+1);
	var result =document.getElementById("result");
function f1(){
	var imgsmille=document.getElementById("smille");
	var play=document.getElementById("play");
	var imgsmille1=document.getElementById("smille1");
	var inp=document.getElementById("out").value;
	result.innerHTML=random;
	if(inp==random){
		imgsmille.style.display="block";
		result.innerHTML="Ну пошли гулять!";
		imgsmille1.style.display="none";
		play.style.display="block";
	}
	else{
		result.innerHTML="Ты не угадал!";
		imgsmille1.style.display="block";

	}
}
function f2(){
			location.reload();
}