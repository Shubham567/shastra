const shastraScript = (options = {}) => {
    const scripts = {
        "index.js" : `window.shastraOptions = ${JSON.stringify(options, null, 2)};

console.log("Welcome to Shastra Ui");

const safeHeaders = ["accept", "accept-language", "cache-control", "content-type", "dnt", "origin", "pragma", "referer", "sec-fetch-dest", "sec-fetch-mode", "sec-fetch-site", "sec-fetch-user", "sec-ch-ua", "sec-ch-ua-mobile", "sec-ch-ua-platform", "upgrade-insecure-requests", "user-agent"];

function shastraSubmitForm(e) {
    console.log("Form Submit Initiated");
    e.preventDefault();
    const form = e.target;
     
    const filteredHeader = Object.keys(window.shastraOptions.curlData.headers).filter(key => safeHeaders.includes(key.toLowerCase()));
    const headers = {};
    filteredHeader.forEach(key => {
        headers[key] = window.shastraOptions.curlData.headers[key];
    });
    
    axios.request({
        url : window.shastraOptions.curlData.url,
        method : window.shastraOptions.curlData.method,
        query : window.shastraOptions.curlData.query,
        headers : headers,
        data : window.shastraOptions.curlData.data,
        withCredentials: true
}).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}

const form = document.getElementById("shastra-form");
form.addEventListener("submit", shastraSubmitForm);
    
        `
    }

    return {...scripts};
}

export default shastraScript;