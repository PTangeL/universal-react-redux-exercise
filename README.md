# Universal React Redux exercise

## Exercise part 1, React:

1. Fix the script `start` so we can execute `npm start` from the terminal. Hint, which file is the entry point?  

2. Change server/app.jsx so it renders the React components

3. Change server/app.jsx so it sends the JavaScript bundle to the client. Hint, Webpack is not creating a file on the disk so don't search for a bundle.js file in your disk. Webpack is generating and serving the file from memory (so it's faster).

4. Add a new route called 'photos' that maps the Photos component

5. Implement the fetch function in Photos component

6. Implement the componentDidMount function in Photos component

## Exercise part 2, Redux:

1. The server side needs a store. Where would you add a `<Provider store={store}>` ? Hint, it should be somewhere in the src/server folder.   

2. On the client the Redux store needs to be initialized with the same data as the store on the server. Please initialize the store on the client with the same data. Hint, this is specific just to the client, so in which folder should it be?

3. Create a new page (http://localhost:3456/posts) with a container and a component to display a list of posts, use this data (http://jsonplaceholder.typicode.com/). Data should be rendered on the server-side and client-side as the Photos component does.

4. Include in the new 'Posts' page a section that displays 5 pictures called "popular pictures". Are you fetching all the data (pictures and posts) on the server-side?


## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
