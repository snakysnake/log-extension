chrome.storage.sync.get(['active','total'], function(result) {
    var active = result.active;
    var totalnr = result.total;

    if (active == 0)
    {
        console.log("currently inactive");
    }
    else 
    {
        const html = document.documentElement.innerHTML;

        var formData = new Object();
        formData.content = html;
        var dataBody = JSON.stringify(formData);
        
        sendRequest(dataBody);
        
        async function sendRequest(dataBody){
            var url = "";
            chrome.storage.sync.get(['target'], function(result) {
                url = result.target;
                console.log("found the following url specified as target: " + result.target);
            });
            console.log("trying to upload html data to specified target");
            const response = await fetch(url, {
                method: 'POST',
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                },
                referrer: 'no-referrer',
                body: dataBody
            });
            console.log(response.status);
        }
        chrome.storage.sync.set({
            total: totalnr++
        });
    }
});

