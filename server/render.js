import { renderToString } from 'react-dom/server'

export default (component) => `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <title>React App</title>
      </head>
      <body>
        <div id="root">${ 'hint: what should you add here?' }</div>
        <script type="application/javascript" src=""></script>
      </body>
  </html>
`
