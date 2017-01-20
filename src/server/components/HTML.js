import {minify} from 'html-tagged-literals';

export default (config, initialState) => {
  const {meta} = initialState;
  return minify`
  <!DOCTYPE html>
  <html>
    <head>
      <title>${meta.title}</title>
      <script>
        window.__STATE = ${JSON.stringify(initialState)};
        window.__CONFIG = ${JSON.stringify(config)};
      </script>
      <link rel="stylesheet" type="text/css" href='https://cdn.jsdelivr.net/foundation/6.2.4-rc2/foundation.min.css'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/foundation-icons/3.0/foundation-icons.min.css">
      <link rel="stylesheet" type="text/css" href='/static/app.css'>
      <meta name="viewport" content="width=device-width" />
    </head>
    <body>
      <div id='root'></div>
      <script src='/app.js'></script>
    </body>
  </html>
  `
}
