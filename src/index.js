//@ts-check
import { CSP_Headers, IS_DEV } from "./helper";

exports.handler = (event, context, callback) => {
  //Get contents of response
  const response = event.Records[0].cf.response;
  const headers = response.headers;
  let CSP_KEY_HEADER = "content-security-policy-report-Only";
  let CSP_KEY_HEADER_KEY = "Content-Security-Policy-Report-Only";
  
  if (IS_DEV) {
    CSP_KEY_HEADER = "content-security-policy";
    CSP_KEY_HEADER_KEY = "Content-Security-Policy";
  }

  headers["strict-transport-security"] = [
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubdomains; preload",
    },
  ];
  headers[CSP_KEY_HEADER] = [
    {
      key: CSP_KEY_HEADER_KEY,
      value: CSP_Headers,
    },
  ];
  headers["x-content-type-options"] = [
    { key: "X-Content-Type-Options", value: "nosniff" },
  ];
  headers["x-frame-options"] = [{ key: "X-Frame-Options", value: "DENY" }];
  headers["x-xss-protection"] = [
    { key: "X-XSS-Protection", value: "1; mode=block" },
  ];
  headers["referrer-policy"] = [
    { key: "Referrer-Policy", value: "same-origin" },
  ];
  headers["X-Version"] = [{ key: "x-version", value: "version v5" }];
  headers["X-Stage"] = [{ key: "x-stage", value: process.env.STAGE }];

  callback(null, response);
};
