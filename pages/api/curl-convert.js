import * as curlConverter from 'curlconverter';

export default function handler(req, res) {

    const curl = req.body.curl;

    try{
        console.assert(curl, "curl is null");

        const curlJs = curlConverter.toJavaScript(curl);
        console.log(curlJs);
        const curlObject = JSON.parse(curlConverter.toJsonString(curl));
        console.log(curlObject);
        res.status(200).json({json: curlObject, js: curlJs});
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({error: e.message});
    }
}
