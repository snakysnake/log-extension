chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set(
		{
			html: ""
		}, function() {
		console.log('Erfolgreich installiert, have fun :)');
	});
	chrome.browserAction.setPopup({
		popup: "popup.html"
    });
});