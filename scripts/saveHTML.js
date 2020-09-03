
chrome.storage.sync.get(['active','userID'], function(result) {
    let userID = result.userID;
    if (result.active == 1)
    {
        console.log("script active. doing the magic");
        const html = document.documentElement.innerHTML;

        var formData = new Object();
        formData.content = html;
        formData.uid = userID;
        var dataBody = JSON.stringify(formData);

        sendRequest(dataBody);
    }
    else
    {
        console.log("sl33p like a sh33p");
    }
});



async function sendRequest(dataBody){
    console.log("trying to upload html data...");
    const response = await fetch("https://learn-easy.at/extension/logAll.php", {
        method: 'POST',
        mode: "cors",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        },
        referrer: 'no-referrer',
        body: dataBody
    });
    add1();
}

function add1()
{
    console.log("yeah boi");
    chrome.storage.sync.get(['total'], function(result) {
        chrome.storage.sync.set({
            total: result.total+1
        });
    });
}