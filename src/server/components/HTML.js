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
    </head>
    <body>
      <div id='root'></div>
      <script src='/app.js'></script>
    </body>
  </html>
  `
}
