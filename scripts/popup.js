const input = document.getElementById("targetField");
const save = document.getElementById("save");
const activeToggle = document.getElementById("activate");
const total = document.getElementById("total");

save.onclick = function() {setTarget(input.value)};
activeToggle.onclick = function() {toggleActive()};

function toggleActive()
{
	chrome.storage.sync.get(['active'], function(result) {
		if (result.active == 0){
			console.log("activated...");
			chrome.storage.sync.set({
				active: 1
			})
		}
		else {
			console.log("stop logging...");
			chrome.storage.sync.set({
				active: 0
			})
		}
	});
}

function setTarget(url) 
{
    console.log(url);
	chrome.storage.sync.set({
		target: url
	})
}

chrome.storage.sync.get(['target','active','total'], function(result) {
	input.value = result.target
	if (result.active == 1)
	{
		activeToggle.checked = true;
	}
	else 
	{
		activeToggle.checked = false;
	}
	total.innerHTML = result.total;
});