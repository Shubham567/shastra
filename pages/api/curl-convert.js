import * as curlConverter from 'curlconverter';

export default function handler(req, res) {

    const curl = req.body.curl;

    try{
        console.assert(curl, "curl is null");

        const curlJs = curlConverter.toJavaScript(curl);
        const curlObject = JSON.parse(curlConverter.toJsonString(curl));
        const contentTypeHeader = Object.keys(curlObject.headers).find(header => header.toLowerCase() === "content-type");
        if(curlObject.headers[contentTypeHeader] === "application/json" || curlObject.headers[contentTypeHeader] === "application/ld+json"){
            try{
                curlObject.data = JSON.parse(Object.keys(curlObject.data)?.[0]);
                curlObject.isValidJsonBody = true;
            }
            catch (e) {
                console.log("Error parsing body");
                curlObject.conversionError = "Not a valid JSON in body";
            }
        }
        console.log("Converted curl to json");
        res.status(200).json({json: curlObject, js: curlJs});
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({error: e.message});
    }
}
