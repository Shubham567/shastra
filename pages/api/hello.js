// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import shastraElement from "../../src/shastra-dom/shastra-element.js";
import shastraRootElement from "../../src/shastra-dom/shastra-root-element.js";
import formPage from "../../src/shastra-ui/form-page.js";

export default function handler(req, res) {

  res.status(200).json(shastraRootElement(formPage()));
}
