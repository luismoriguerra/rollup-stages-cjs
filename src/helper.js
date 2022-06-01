const csp_values = [
  {
    'frame-ancestors': ["'self'"]
  },
  {
    'block-all-mixed-content': []
  },
  {
    'default-src': ["'self'"]
  },
  {
    'script-src': [
      "'self'",
      "'sha256-3Ey30PJkNcf9LrK7CIqrujoq79a+uJqKgYsaBDj15Eo='",
      "'sha256-fynwwNeatXCacHQ6swcxEezVAL4vYjU1A7aWVSTlQ+Q='",
      "'report-sample'",
      "'unsafe-inline'",
      'https://*.platform.linuxfoundation.org',
      'https://cdn.auth0.com',
      'https://connect.facebook.net',
      'https://edge.fullstory.com',
      'https://forms.hsforms.com',
      'https://js.facebook.com',
      'https://js.hs-analytics.net',
      'https://js.hs-banner.com',
      'https://js-na1.hs-scripts.com',
      'https://js.hs-scripts.com',
      'https://js.hsadspixel.net',
      'https://js.hscollectedforms.net',
      'https://js.hsforms.net',
      'https://js.hsleadflows.net',
      'https://js.hubspotfeedback.com',
      'https://js.usemessages.com',
      'https://kit.fontawesome.com',
      'https://use.fontawesome.com',
      "rs.fullstory.com"
    ]
  },
  {
    'style-src': [
      "'self'",
      "'report-sample'",
      "'unsafe-inline'",
      '*.fontawesome.com',
      'ajax.googleapis.com',
      'cdn.auth0.com',
      'fonts.googleapis.com'
    ]
  },
  {
    'object-src': ["'none'"]
  },
  {
    'frame-src': [
      "'self'",
      '*.hubspot.com',
      '*.facebook.com',
      '*.auth0.com',
      'connect.facebook.net',
      'forms.hsforms.com',
      'js.hsadspixel.net',
      'js.hscollectedforms.net',
      'js.usemessages.com',
      'sso.linuxfoundation.org',
      '*.youtube.com',
    ]
  },
  {
    'child-src': [
      "'self'",
      '*.facebook.com',
      'app.hubspot.com',
      'connect.facebook.net',
      'forms.hsforms.com',
      'js.hsadspixel.net',
      'js.hscollectedforms.net',
      'js.usemessages.com'
    ]
  },
  {
    'img-src': [
      "'self'",
      'data:',
      '*.linuxfoundation.org',
      '*.hubspot.com',
      '*.fbcdn.net',
      '*.facebook.net',
      '*.facebook.com',
      '*.auth0.com',
      'ajax.googleapis.com',
      'cdn2.hubspot.net',
      'fonts.gstatic.com',
      'forms.hsforms.com',
      'images.youracclaim.com',
      'lf-master-organization-logos-prod.s3.us-east-2.amazonaws.com',
      'lf-master-project-logos-prod.s3.us-east-2.amazonaws.com',
      'lfx-cdn-prod.s3.amazonaws.com',
      'lf-platform-documents-dev.s3.amazonaws.com',
      'lf-master-project-logos-dev.s3.us-east-2.amazonaws.com',
      'platform-logos-myprofile-api-dev.s3.us-east-2.amazonaws.com',
      'lf-platform-documents-stage.s3.amazonaws.com',
      'lf-master-project-logos-stage.s3.us-east-2.amazonaws.com',
      'platform-logos-myprofile-api-stage.s3.us-east-2.amazonaws.com',
      'lf-platform-documents-staging.s3.amazonaws.com',
      'lf-master-project-logos-staging.s3.us-east-2.amazonaws.com',
      'platform-logos-myprofile-api-staging.s3.us-east-2.amazonaws.com',
      'lf-platform-documents-prod.s3.amazonaws.com',
      'lf-master-project-logos-prod.s3.us-east-2.amazonaws.com',
      'platform-logos-myprofile-api-prod.s3.us-east-2.amazonaws.com',
      'lf-platform-documents.s3.amazonaws.com',
      'lf-master-project-logos.s3.us-east-2.amazonaws.com',
      'platform-logos-myprofile-api.s3.us-east-2.amazonaws.com',
      'upload.wikimedia.org',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ]
  },
  {
    'font-src': ["'self'", 'data:', '*.fontawesome.com', 'fonts.googleapis.com', 'fonts.gstatic.com']
  },
  {
    'connect-src': [
      "'self'",
      '*.hubspot.com',
      '*.fontawesome.com',
      '*.facebook.com',
      '*.auth0.com',
      'ajax.googleapis.com',
      'api.hubapi.com',
      'connect.facebook.net',
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'forms.hsforms.com',
      'jflj9olkmc.execute-api.us-east-2.amazonaws.com',
      '13jwquj931.execute-api.us-east-2.amazonaws.com',
      '28ebnk8i39.execute-api.us-east-2.amazonaws.com',
      'js.hs-analytics.net',
      'js.hs-banner.com',
      'js.hs-scripts.com',
      'js.hsadspixel.net',
      'js.hsleadflows.net',
      'js.hubspotfeedback.com',
      'js.usemessages.com',
      "rs.fullstory.com",
      'sso.linuxfoundation.org',
      'https://platform-logos-myprofile-api-dev.s3.us-east-2.amazonaws.com',
      'https://platform-logos-myprofile-api-staging.s3.us-east-2.amazonaws.com',
      'https://platform-logos-myprofile-api-prod.s3.us-east-2.amazonaws.com',
      'https://platform-logos-myprofile-api.s3.us-east-2.amazonaws.com',
      'https://lfx-user-presentations-dev.s3.us-east-2.amazonaws.com',
      'https://lfx-user-presentations-staging.s3.us-east-2.amazonaws.com',
      'https://lfx-user-presentations-prod.s3.us-east-2.amazonaws.com',
      'https://lfx-user-presentations.s3.us-east-2.amazonaws.com',
    ]
  },
  {
    'manifest-src': ["'self'"]
  },
  {
    'base-uri': ["'self'"]
  },
  {
    'form-action': [
      "'self'",
      '*.facebook.com',
      '*.auth0.com',
      'connect.facebook.net',
      'forms.hsforms.com',
      'forms.hubspot.com'
    ]
  },
  {
    'media-src': ["'self'"]
  },
  {
    'prefetch-src': ["'self'"]
  },
  {
    'worker-src': ["'self'"]
  },
];

function arrToCsp(cspValues) {
  let csp = '';
  cspValues.forEach(function(cspValue) {
    for (let key in cspValue) {
      csp += `${key} ${cspValue[key].join(' ')};`;
    }
  });
  return csp;
}

export const CSP_Headers = arrToCsp(csp_values);
export const IS_DEV = process.env.STAGE === "dev";