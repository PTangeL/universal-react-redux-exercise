# Universal React Redux exercise

## Exercise part 1, React:

1. Fix the `start` script in package.json so we can execute `npm start` from the terminal. Hint, which file is the entry point?  

2. Edit server/render.js so it uses the renderToString function. Hint, in what part of the HTML should React render your app? Why don't you disable JS on your browser?

3. Edit server/app.js so the server renders your React App

4. Edit server/render.js so it sends the JavaScript bundle to the client. Hint, Webpack is not creating a file on the disk so don't search for a bundle.js file in your disk. Webpack is generating and serving the file from memory (so it's faster). IMPORTANT, make sure you enable your JS on your browser again if you disabled it in the previous question.

5. Can you fix this warning: render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.

6. If you disable JS in your browser, why there are no pictures rendered from the server? Can you fix that so the server renders a list of pictures when JS is disabled on the client?

## Exercise part 2, Redux:

Before you start part 2, please checkout branch part-2-redux

1. Please edit server/app.js so the server side passes a store to the App.

2. How can you send the pictures from the server-side so they are display on the client when JS is disabled on the client? Hint, you need to pass some initial state to the store on the server-side.

3. Can you fix this warning? Warning: Did not expect server HTML to contain a &lt;img&gt; in &lt;div&gt;. Hint, the problem is that the initial state on the server is different than the initial state on the client.

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
