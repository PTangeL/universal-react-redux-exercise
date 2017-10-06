import { renderToString } from 'react-dom/server'

export default (component, initialState) => `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <title>React App</title>
        <script>
               window.__store_initial_state__ = ${JSON.stringify(initialState)}
        </script>
      </head>
      <body>
        <div id="root">${renderToString(component)}</div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
  </html>
`
