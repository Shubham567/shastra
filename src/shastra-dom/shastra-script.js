const shastraScript = (options = {}) => {
    const scripts = {
        "index.js" : `window.shastraOptions = ${JSON.stringify(options, null, 2)};

console.log("Welcome to Shastra Ui");

const safeHeaders = ["accept", "accept-language", "cache-control", "content-type", "dnt", "origin", "pragma", "referer", "sec-fetch-dest", "sec-fetch-mode", "sec-fetch-site", "sec-fetch-user", "sec-ch-ua", "sec-ch-ua-mobile", "sec-ch-ua-platform", "upgrade-insecure-requests", "user-agent"];

function shastraSubmitForm(e) {
    console.log("Form Submit Initiated");
    e.preventDefault();
    const form = e.target;
    
    const body = {};
    const query = {};
    const formData = new FormData(form);
    
    const filteredHeader = Object.keys(window.shastraOptions.curlData.headers || {}).filter(key => safeHeaders.includes(key.toLowerCase()));
    const headers = {};
    filteredHeader.forEach(key => {
        headers[key] = window.shastraOptions.curlData.headers[key];
    });
    
    
    for (const field of form.elements) {
        if (Object.keys(window.shastraOptions.curlData.queries || {}).includes(field.name)) {
            query[field.name] = field.value;
        }
        else if (Object.keys(window.shastraOptions.curlData.data || {}).includes(field.name)) {
            if(window.shastraOptions.curlData.isValidJsonBody){
                body[field.name] = field.value;
            }
            else{
                formData.append(field.name, field.value);
            }
        }
    }
    
    const submitBtn = document.getElementById("shastra-submit-btn");
    submitBtn.disabled = true;
    const submitBtnText = submitBtn.innerText;
    submitBtn.innerHTML = "Sending...";
    
    const clearBtn = document.getElementById("shastra-reset-btn");
    clearBtn.disabled = true;
    
    axios.request({
        url : window.shastraOptions.curlData.url,
        method : window.shastraOptions.curlData.method,
        headers : headers,
        params : {...(window.shastraOptions.curlData.query || {}), ...query},
        data : window.shastraOptions.curlData.isValidJsonBody ? body : formData,
        // withCredentials: true
    }).then(res => {
        console.log(res);
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitBtnText;
    }).catch(err => {
        console.log(err);
        submitBtn.disabled = false;
        clearBtn.disabled = false;
    })
}

const form = document.getElementById("shastra-form");
form.addEventListener("submit", shastraSubmitForm);
`,
        "show.js" : `

`
    }

    return {...scripts};
}

export default shastraScript;