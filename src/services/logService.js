
// function init() {

// }

// function log(error) {
//   console.error(error);
// }

// export default {
//   init,
//   log
// };






// For simplicity, I changed the implementation of this module
// and removed Sentry. We can always add that in the future
// and this module is the only module we need to modify.
//Below is the code for implementing Sentry as at 2022, June.

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';


function init() {
  Sentry.init({
    dsn: 'https://6a85898c608c48ad9e9a709edebd413d@o1321667.ingest.sentry.io/6578349',
    integrations: [new BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};


