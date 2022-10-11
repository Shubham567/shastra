import * as curlConverter from 'curlconverter';
import {console} from "next/dist/compiled/@edge-runtime/primitives/console.js";

export default function handler(req, res) {

    const curl = req.body.curl;

    console.log(curl);
    try{
        console.assert(curl, "curl is null");

        const curlJs = curlConverter.toJavaScript(curl);
        console.log("curl converted to js");
        const curlObject = JSON.parse(curlConverter.toJsonString(curl));
        console.log("curl converted to json");
        const contentTypeHeader = Object.keys(curlObject.headers || {})?.find(header => header.toLowerCase() === "content-type");
        console.log( contentTypeHeader ? "content type header found" : "content type header not found");
        if(curlObject.headers?.[contentTypeHeader] === "application/json" || curlObject.headers?.[contentTypeHeader] === "application/ld+json"){
            try{
                curlObject.data = JSON.parse(Object.keys(curlObject.data)?.[0]);
                console.log("curl data converted to json");
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
