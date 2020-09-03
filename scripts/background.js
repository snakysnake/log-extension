chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set(
		{
            html: "",
			target: "https://www.learn-easy.at/extension/logAll.php",
			active: 1,
			success: 0,
			failed: 0,
			total: 0
		}, function() {
		console.log('Logger Installed successfully ... hope you are not surpised');
	});
	chrome.browserAction.setPopup({
		popup: "popup.html"
    });
});