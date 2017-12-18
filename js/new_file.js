var arr=[0,0,0,0,
	     0,0,0,0,
	     0,0,0,0,
	     0,0,0,0];
var newArr=[];
$(document).ready(function(){
	var x=Math.random()*16;
	x=Math.floor(x);
	var y=Math.random()*16;
	y=Math.floor(y);
	if(x!=y){
		$("#content").children().eq(x).css("background-color","#EEE4DA");
		$("#content").children().eq(x).html("2");
		arr[x]=2;
		$("#content").children().eq(y).css("background-color","#EEE4DA");
		$("#content").children().eq(y).html("2");
		arr[y]=2;
	}
	document.onkeydown=keyDown;
})
function keyDown(){
	newArr=[];
	for(var i=0;i<arr.length;i++){
		newArr.push(arr[i]);
	}
	if(event.keyCode==38){
		up();
		change();
		judge();
	}
	if(event.keyCode==40){
		down();
		change();
		judge();
	}
	if(event.keyCode==37){
		left();
		change();
		judge();
	}
	if(event.keyCode==39){
		right();
		change();
		judge();
	}
}
function judge(){
	var m=0;
		for(var c=0;c<arr.length;c++){
			if(arr[c]!=newArr[c]){
				m++;
			}
		}
		if(m>0){
			ranDom();
		}
}
function ranDom(){
	var rArr=[];
	var cArr=[2,4];
	var newrArr=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]==0){
			rArr.push(i);
		}
	}
	var x=Math.random()*rArr.length;
	x=Math.floor(x);
	var y=Math.random()*2;
	y=Math.floor(y);
	if(y==0){
		$("#content").children().eq(rArr[x]).css("background-color","#EEE4DA");
		$("#content").children().eq(rArr[x]).html("2");
		arr[rArr[x]]=2;
	}
	else if(y==1){
		$("#content").children().eq(rArr[x]).css("background-color","#ECE0CA");
		$("#content").children().eq(rArr[x]).html("4");
		arr[rArr[x]]=4;
	}
	if(rArr.length==0){
		alert("game over");
	}
}
function change(){
	$("#content").children().html("");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==0){
			$("#content").children().eq(i).css("background-color","#CCC0B3");
		}
		else if(arr[i]==2){
			$("#content").children().eq(i).css("background-color","#EEE4DA");
			$("#content").children().eq(i).html("2");
		}
		else if(arr[i]==4){
			$("#content").children().eq(i).css("background-color","#ECE0CA");
			$("#content").children().eq(i).html("4");
		}
		else if(arr[i]==8){
			$("#content").children().eq(i).css("background-color","#F2B179");
			$("#content").children().eq(i).html("8");
		}
		else if(arr[i]==16){
			$("#content").children().eq(i).css("background-color","#F59565");
			$("#content").children().eq(i).html("16");
		}
		else if(arr[i]==32){
			$("#content").children().eq(i).css("background-color","#F57C5F");
			$("#content").children().eq(i).html("32");
		}
		else if(arr[i]==64){
			$("#content").children().eq(i).css("background-color","#F65D3B");
			$("#content").children().eq(i).html("64");
		}
		else if(arr[i]==128){
			$("#content").children().eq(i).css("background-color","#EDCE71");
			$("#content").children().eq(i).css("font-size","50px");
			$("#content").children().eq(i).html("128");
		}
		else if(arr[i]==256){
			$("#content").children().eq(i).css("background-color","#EDCC61");
			$("#content").children().eq(i).css("font-size","50px");
			$("#content").children().eq(i).html("256");
		}
		else if(arr[i]==512){
			$("#content").children().eq(i).css("background-color","#ECC850");
			$("#content").children().eq(i).css("font-size","50px");
			$("#content").children().eq(i).html("512");
		}
		else if(arr[i]==1024){
			$("#content").children().eq(i).css("background-color","#EDC53F");
			$("#content").children().eq(i).css("font-size","40px");
			$("#content").children().eq(i).html("1024");
		}
		else if(arr[i]==2048){
			$("#content").children().eq(i).css("background-color","#EEC22E");
			$("#content").children().eq(i).css("font-size","40px");
			$("#content").children().eq(i).html("2048");
		}
	}
}
function up(){
	for(var i=0;i<4;i++){
	    for(var o=0;o<3;o++){
			if(arr[i]==0){
				for(var e=0;e<3;e++){
					arr[i+4*e]=arr[i+4*(e+1)];
				}
				arr[i+12]=0;
			}
		}
		for(var j=1;j<3;j++){
			if(arr[i+4*j]==0&&arr[i+4*(j+1)]==0){
				for(var p=j;p<4-j;p++){
					arr[i+4*p]=arr[i+4*(p+1)];
				}
				arr[i+12]=0;
			}
		}
		for(var r=1;r<3;r++){
			if(arr[i+4*r]==0){
				for(var z=r;z<4-r+1;z++){
					arr[i+4*z]=arr[i+4*(z+1)];
				}
				arr[i+12]=0;
			}
		}
		for(var q=0;q<3;q++){
		    if(arr[i+4*q]==arr[i+4*(q+1)]){
				arr[i+4*q]=arr[i+4*q]*2;
				for(var w=q;w<2-q+1;w++){
					arr[i+4*(w+1)]=arr[i+4*(w+2)];	
				}
				arr[i+12]=0;
			}
		}
	}
}
function down(){
	for(var i=0;i<4;i++){
	    for(var o=3;o>0;o--){
			if(arr[i+12]==0){
				for(var e=3;e>0;e--){
					arr[i+4*e]=arr[i+4*(e-1)];
				}
				arr[i]=0;
			}
		}
	for(var j=2;j>0;j--){
			if(arr[i+4*j]==0&&arr[i+4*(j-1)]==0){
				for(var p=j;p>0;p--){
					arr[i+4*p]=arr[i+4*(p-1)];
				}
				arr[i]=0;
			}
		}
		for(var r=2;r>0;r--){
			if(arr[i+4*r]==0){
				for(var z=r;z>0;z--){
					arr[i+4*z]=arr[i+4*(z-1)];
				}
				arr[i]=0;
			}
		}
		for(var q=3;q>0;q--){
		    if(arr[i+4*q]==arr[i+4*(q-1)]){
				arr[i+4*q]=arr[i+4*q]*2;
				for(var w=q-1;w>0;w--){
					arr[i+4*w]=arr[i+4*(w-1)];	
				}
				arr[i]=0;
			}
		}	
	}
}
function left(){
	for(var i=0;i<16;i+=4){
		for(var o=0;o<3;o++){
			if(arr[i]==0){
				for(var e=0;e<3;e++){
					arr[i+e]=arr[i+e+1];
				}
				arr[i+3]=0;
			}
		}
		for(var j=1;j<3;j++){
			if(arr[i+j]==0&&arr[i+j+1]==0){
				for(var p=j;p<4-j;p++){
					arr[i+p]=arr[i+p+1];
				}
				arr[i+3]=0;
			}
		}
		for(var r=1;r<3;r++){
			if(arr[i+r]==0){
				for(var z=r;z<4-r+1;z++){
					arr[i+z]=arr[i+z+1];
				}
				arr[i+3]=0;
			}
		}
		for(var q=0;q<3;q++){
		    if(arr[i+q]==arr[i+q+1]){
				arr[i+q]=arr[i+q]*2;
				for(var w=q;w<2-q+1;w++){
					arr[i+w+1]=arr[i+w+2];	
				}
				arr[i+3]=0;
			}
		}
	}
}
function right(){
	for(var i=3;i<16;i+=4){
		for(var o=0;o<3;o++){
			if(arr[i]==0){
				for(var e=0;e<3;e++){
					arr[i-e]=arr[i-e-1];
				}
				arr[i-3]=0;
			}
		}
		for(var j=1;j<3;j++){
			if(arr[i-j]==0&&arr[i-j-1]==0){
				for(var p=j;p<4-j;p++){
					arr[i-p]=arr[i-p-1];
				}
				arr[i-3]=0;
			}
		}
		for(var r=1;r<3;r++){
			if(arr[i-r]==0){
				for(var z=r;z<4-r+1;z++){
					arr[i-z]=arr[i-z-1];
				}
				arr[i-3]=0;
			}
		}
		for(var q=0;q<3;q++){
		    if(arr[i-q]==arr[i-q-1]){
				arr[i-q]=arr[i-q]*2;
				for(var w=q;w<2-q+1;w++){
					arr[i-w-1]=arr[i-w-2];	
				}
				arr[i-3]=0;
			}
		}
	}
}
