// Audrey Pounds 05/15/2019

username = window.prompt("What is your name?");

// CODE FOR QUESTION 1
function question1() {
	if (document.getElementById("a1").checked) {
		document.body.style.backgroundColor = "green";
	}
	else {
		document.body.style.backgroundColor = "red";
	}
}
document.getElementById("b1").addEventListener("click", question1, false)

// CODE FOR QUESTION 2
function question2() {
	var num1 = Number(document.getElementById("n1").value);
	var num2 = Number(document.getElementById("n2").value);
	var num3 = Number(document.getElementById("n3").value);
	var num4 = Number(document.getElementById("n4").value);
	var num5 = Number(document.getElementById("n5").value);
	var num6 = Number(document.getElementById("n6").value);
	var num7 = Number(document.getElementById("n7").value);
	var num8 = Number(document.getElementById("n8").value);
	var num9 = Number(document.getElementById("n9").value);
	var num10 = Number(document.getElementById("n10").value);


	var result1 = num1 + num2;
	console.log(result1);
	document.getElementById("a2.1").innerHTML = username + ", the answer is: " + result1;
	
	var result2 = num3 - num4;
	console.log(result2);
	document.getElementById("a2.2").innerHTML = username + ", the answer is: " + result2;

	var result3 = num5 * num6;
	console.log(result3);
	document.getElementById("a2.3").innerHTML = username + ", the answer is: " + result3;

	var result4 = num7 / num8;
	console.log(result4);
	document.getElementById("a2.4").innerHTML = username + ", the answer is: " + result4;
	
	var result5 = num9 % num10;
	console.log(result5);
	document.getElementById("a2.5").innerHTML = username + ", the answer is: " + result5;
	
}
document.getElementById("b2.1").addEventListener("click", question2, false)
document.getElementById("b2.2").addEventListener("click", question2, false)
document.getElementById("b2.3").addEventListener("click", question2, false)
document.getElementById("b2.4").addEventListener("click", question2, false)
document.getElementById("b2.5").addEventListener("click", question2, false)


// CODE FOR QUESTION 3
function greatest(num11, num12) {
	
	var num11 = Number(document.getElementById("n11").value);
	var num12 = Number(document.getElementById("n12").value);
	
	if (num11 > num12) {
		document.getElementById("a3").innerHTML = username + ", " + num11 + " is greater.";
		}
	else {
		document.getElementById("a3").innerHTML = username + ", " + num12 + " is greater.";
		}
}
document.getElementById("b3").addEventListener("click", greatest, false)


// CODE FOR QUESTION 4
function cube(number, exponent) {
	var x = Number(document.getElementById("n13").value);
	var result = 1;
	var exponent = 3;
	
	for (var count = 0; count < exponent; count ++) {
		result *= x;
		}
	console.log(result);
	document.getElementById("a4").innerHTML = username + ", " + x + "^3 = " + result;
	}
document.getElementById("b4").addEventListener("click", cube, false)


// CODE FOR QUESTION 5
function ultimateQuestion() {
	if (document.getElementById("a5").checked) {
		document.body.style.backgroundColor = "green";
		}
	else {
		document.body.style.backgroundColor = "red";
	}	
}
document.getElementById("b5").addEventListener("click", ultimateQuestion, false)


// CODE FOR QUESTION 6
function vowelCount() {
	
	var str = String(document.getElementById("s1").value);
	var vowelCount = 0;
	var consonantCount = 0;
	
	for (var i = 0; i < str.length; i++){
		
		if(str[i] == 'a' || str[i] == 'i' || str[i] == 'o' ||str[i] == 'e' ||str[i] == 'u' ||str[i] == 'A' || str[i] == 'I' || str[i] == 'O' ||str[i] == 'E' ||str[i] == 'U'){
			
			vowelCount += 1;
	  
		}
	}
	for (var j = 0; j < str.length; j++){
		
		if(str[j] !== 'a' && str[j] !== 'i' && str[j] !== 'o' && str[j] !== 'e' && str[j] !== 'u' && str[j] !== 'A' && str[j] !== 'I' && str[j] !== 'O' && str[j] !== 'E' && str[j] !== 'U'){
			
			consonantCount += 1;
	  
		}
	}

	document.getElementById("a6").innerHTML = username + ", " + str + " has " + vowelCount + " vowel(s) and " + consonantCount + " consonant(s).";
}
document.getElementById("b6").addEventListener("click", vowelCount, false)



// CODE FOR QUESTION 7
var $ = function (id) { return document.getElementById(id); };

var imageCache = [];
var imageCounter = 0;
var timer;

var runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    var image = imageCache[imageCounter];
    $("image").src = image.src;
    $("caption").firstChild.nodeValue = image.title;
};

window.onload = function () {
    var listNode = $("image_list2");    // the ul element
    var links = listNode.getElementsByTagName("a");
    
    // Preload images, copy title properties, and store in array
    var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.getAttribute("href");
        image.title = link.getAttribute("title");
        imageCache[imageCache.length] = image;
    }

    // Attach start and pause event handlers
    $("start").onclick = function() {
        // disable start button, enable pause button,
        // run slide show, and start timer to change 
        // slide every 4 seconds
        runSlideShow();
        timer = setInterval(runSlideShow, 4000);
        $("start").setAttribute("disabled", "true");
        $("pause").removeAttribute("disabled");
    };
    $("pause").onclick = function() {
        // cancel timer, disable pause button,
        // and enable start button
        clearInterval(timer);
        $("start").removeAttribute("disabled");
        $("pause").setAttribute("disabled", "true");
    };
};



// CODE FOR QUESTION 8
function tardis() {
	var x = document.getElementById("myAudio1"); 
	var y = document.getElementById("myAudio2"); 

	
	if (document.getElementById("a7").checked) {
		window.alert("That is the correct answer. You are the Doctor!");
		y.play();
		document.body.style.backgroundColor = "green";
		}
	else {
		window.alert("That is incorrect. You shall be exterminated!!!");
		x.play();
		document.body.style.backgroundColor = "red";
	}	
}
document.getElementById("b8").addEventListener("click", tardis, false)


// CODE FOR QUESTION 9
function jediCodeArray() {
	
	var str1 = String(document.getElementById("s2").value);
	var str2 = String(document.getElementById("s3").value);
	var str3 = String(document.getElementById("s4").value);
	var str4 = String(document.getElementById("s5").value);
	var str5 = String(document.getElementById("s6").value);
	var code = ["peace","knowledge","serenity","harmony","the force"];
	var x = document.getElementById("myAudio3"); 
	var y = document.getElementById("myAudio4"); 

	if(str1 == code[0] && str2 == code[1] && str3 == code[2] && str4 == code[3] && str5 == code[4]) {
		window.alert("That is the correct answer.");
		document.body.style.backgroundColor = "green";
		x.play();
	}
	else {
		window.alert("There is no emotion, there is PEACE. There is no ignorance, there is KNOWLEDGE. There is no passion, there is SERENITY. There is no chaos, there is HARMONY. There is no death, there is THE FORCE.");
		document.body.style.backgroundColor = "red";
		y.play();
	}
}
document.getElementById("b9").addEventListener("click", jediCodeArray, false)


