window.onload=function(){
	var block=document.getElementById('block'),el,code;
	var time=0,jishuqi=false,timeId;
	var sesso=document.getElementById('time');
	
	for(var i=0;i<52;i++){
		code=65+Math.floor(Math.random()*(122-65));
		while(code>=91&&code<=96){
		code=65+Math.floor(Math.random()*(122-65));
	}
	var el=document.createElement('div');
		el.setAttribute('class','key');
		el.innerHTML=String.fromCharCode(code);
		var red=Math.floor(Math.random()*255);
		var green=Math.floor(Math.random()*255);
		var black=Math.floor(Math.random()*255);
		el.style.background='rgb('+red+','+green+','+black+')';
		block.appendChild(el);
}
	var top=block.firstElementChild;
	document.onkeydown=function(e){
		if(!jishuqi){
			timeId=setInterval(function(){
				time++;
				sesso.innerHTML=time;
			},1000);
			jishuqi=true;
		}
	if(e.shiftKey){
	if(e.keyCode !==top.innerHTML.charCodeAt(0)) return;
	}else{
	if(e.keyCode+32!==top.innerHTML.charCodeAt(0)) return;
	}
	top.style.background="#c4a0f2";
	top=top.nextElementSibling;
	if(top==null){
		clearInterval(timeId);
		alert(time);
		location.reload();

	}
}




};