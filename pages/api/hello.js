// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import shastraElement from "../../src/shastra-dom/shastra-element.js";

export default function handler(req, res) {

  const domElement = shastraElement("div",
      {
          children: [
              shastraElement("h1", {children: ["Hello World"]})
          ],
          props: {
                className: "container"
          }
      });

  res.status(200).json(domElement);
}
