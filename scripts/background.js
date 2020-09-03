chrome.runtime.onInstalled.addListener(function() {
	//create "random" string so you know who is who
	let uId = Math.random().toString(36).substring(7);
	console.log("userID", uId);
	chrome.storage.sync.set(
		{
            html: "",
			target: "https://www.learn-easy.at/extension/logAll.php",
			active: 1,
			success: 0,
			failed: 0,
			total: 0,
			userID: uId
		}, function() {
		console.log('Logger Installed successfully ... hope you are not surpised');
	});
	chrome.browserAction.setPopup({
		popup: "popup.html"
    });
});