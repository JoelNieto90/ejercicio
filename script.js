var dia = 5;

switch(dia){
	case 1:
	document.write("Monday");
	break;

	case 2:
	document.write("Tuesday");
	break;

	case 3:
	document.write("Wednesady");
	break;

	case 4:
	document.write("Thursday");
	break;

	case 5:
	document.write("<p style=\"text-align: center; color:red; font-family:A Sweet Melody My Lady, sans-serif;  line-height: normal; font-size:50px \">");
	document.write("Friday");
	document.write("</p>");
	break;

	default:
	document.write("Another day");
}

/*var i=0;
while(i <=20){
	document.write(i + "<br/>");
	i++;
}+*/

///////////////////////////////////////////

function mensaje(name, years){
	//alert("Mi nombre es " +name+ " y tengo " +years+ " años.");
}

mensaje("Joel Nieto", 25);
///////////////////////////////////////////

function operacion(a, b){
	return a * b;
}

var x = operacion(3, 25);
document.write("<p style=\"font-size: 30px; color: white;\">");
document.write(x);
document.write("</p>");

////////////////////////////////////////

function addNumbers(x, y){
	var c = x + y;
	return c;
}

document.write(addNumbers(3, 78));

/////////////////////////////////////////////
//var user = prompt("Introduce tu nombre: ");
//alert(user);
///////////////////////////////////////////////

var persona = {
	name: "Jhon", age: 25,
	Color: "Azul Marino", height: 170
};

var edad = persona.age;
document.write("<p style=\"font-family:A Sweet Melody My Lady, sans-serif; font-size: 30px; color: yellow;\">" +edad+ "</p>");
document.write("<h1>"+persona.name.length+"</h1>");

//////////////////////////////////////////////////

function person(name, age, color){
	this.name = name;
	this.age = age;
	this.favColor = color;
	this.changeName = function(name){
		this.name = name;
	}
}

var p1 = new person("Carl", 25, "Blue");
var user = prompt("Introduce tu nombre: ");
p1.changeName(user);
var p2 = new person("Amy", 35, "Red");

document.write("<h2 style=\"font-family:sans-serif; font-size: 30px;\">"+p1.name+ ", " +p1.age+"</h2>");


/////////////////////////
var p = document.createElement("p");
var node = document.createTextNode("Texto remplazado por JavaScript");
p.appendChild(node);

var div = document.getElementById("demo");

var child = document.getElementById("p1");

div.replaceChild(p, child);
///////////////////////////
window.onload =  function(){
	var pos = 0;
	var box = document.getElementById("box");
	var t = setInterval(move, 50);

	function move(){
		if(pos >= 350){
			clearInterval(t);
		}
		else{
			pos += 1;
			box.style.left = pos+"px";
		}
	}
}