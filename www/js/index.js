var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
/*
var key = "pen";
var value1 = "red";
var key2 = "phone";
var value2 = "blue";
var key3 = "watch";
var value3 = "yellow";
var key4 = "bag";
var value4 = "pink";
var key5= "laptop";
var value5 = "black";
window.localStorage.setItem( key, value1, key2, value2, key3, value3, key4, value4, key5, value5);
var value6 = window.localStorage.getItem(key, key2, key3, key4, key5);
window.alert(value6.length);
window.alert(key);
window.alert(value6);
window.alert(key2);
window.alert(value2);
*/

var chocbar = {
	"Energy (KJ)": "2058kJ",
	"Energy (Kcal)": "500kcal",
	"Protein" : "6.2g",
	"Carbohydrate" : "58.5g" {
		"of which sugar" : "54g"
	}
	"Total fat" : "26.5g" {
		"(of which saturated fat)" : "16.0g"
	}
	"Fibre" : "0.6g"
	{
		"Equivalent as salt" : "0.2g"
	}
	}
var chocbarstring = JSON.stringify (chocbar);
window.localStorage.setItem("Carbohydrate", "Total fat", "Fibre", chocbarstring);
var getchocbar = window.localStorage.getItem("Carbohydrate","Total fat", "Fibre");
var chocbarJSON = JSON.parse(getchocbar);
window.alert(chocbar);
window.alert(getchocbar);
window,alert(chocbarJSON);
    //event listerner
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //An event handler processes actions these can be triggered by the user e.g. keystrokes or the system itself. 
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	// Handle the resume event
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
