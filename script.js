var divOne = document.getElementById("divOne");

//////////////////////////////////////////////////////

var arr = [1, 2, 4, 2, 1];

function addNum() {
	if(document.getElementById("num").value != "") {
		arr.push(document.getElementById("num").value);
		val = document.getElementById("num").value;
		
		divOne.innerHTML = '';
		show();
	}
}

function findMostTimes(arr) {
	var times = [];
	
	for(i in arr) {
		for(j in times) {
			if(arr[i] == times[j].Value) {
				times[j].Times += 1;
			} else {
				var data = {
					"Value": arr[i],
					"Times": 1
				};
				
				times.push(data);
			}
		}
		
		if(times.length == 0) {
			var data = {
				"Value": arr[i],
				"Times": 1
			};
			
			times.push(data);
		}
	}
	
	var maxTimes = times[0].Times;
	var valueWithMaxTimes = times[0].Value;
	
	for(i in times) {
		if(times[i].Times > maxTimes) {
			maxTimes = times[i].Times;
			valueWithMaxTimes = times[i].Value;
		}
	}
	
	return valueWithMaxTimes;
}

var val = 1;

function show() {
	divOne.innerHTML += 'Returns value that occurs maximum nubmer of times</br></br>Array: ';

	for(i in arr) {
		divOne.innerHTML += arr[i] + ' ';
	}
	
	var valueWithMaxTimes = findMostTimes(arr);
	
	divOne.innerHTML += '</br></br>Add number to array: ';
	divOne.innerHTML += '<input type="number" name="num" id="num" value="'+val+'"/>';
	divOne.innerHTML += '<button id="addButton" onclick="addNum()">Add</button>';
	divOne.innerHTML += '</br></br>Value: ';
	divOne.innerHTML += valueWithMaxTimes;
}























//////////////////////////////////////////////////////
