## Goals For This Project

### general front end

1. prettier?
2. webpack?

### react

1. explore charkra UI
    - general
        - Style Props: All component styles can be overridden or extended via style props to reduce the use of css prop or styled().Compose new components from Box
        - Simplicity: Strive to keep the component API fairly simple and show real world scenarios of using the component.
        - Composition: Break down components into smaller parts with minimal props to keep complexity low, and compose them together. This will ensure that the styles and functionality are flexible and extensible
        - Accessibility: When creating a component, keep accessibility top of mind. This includes keyboard navigation, focus management, color contrast, voice over, and the correct aria-\* attributes.
        - Dark Mode: Make components dark mode compatible. Use useColorMode hook to handle styling. Learn more about dark mode.
        - Naming Props: We all know naming is the hardest thing in this industry. Generally, ensure a prop name is indicative of what it does. Boolean props should be named using auxiliary verbs such as does, has, is and should. For example, Button uses isDisabled, isLoading, etc.
    - setup
        - next.js setup, include <ChakraProvider> outside of the \_app.js component
    - how to responsive
        - can use addbreakpoints OR inline base, md, xl on the given style
2. more about SSR
    - **see below**
3. testing with Jest
4. code splitting

### security

1. encryption
2. preventing against injections

### backend

1. using postgress with next.js
2. legal stuff for storing passwords?
3. loading only when necessary

### next.js

1. more about routing
    - beside the Component in \_app.js, add your navbar
    - within the navbar, use links that redirect with href="/path_to_file_from_pages"
    - dynamic routing is a thing -> relates to db querying
2. image loading
3. what eslint is and how to work its json
4. server side / static rerndering
    - **see below**
5. router.query
    - router query on page gets messed up / cleared
    - to solve this
6. hosting issues
    - ESLINT big time
        - usual error is making sure it compiles on npm run build and also doesn't popup as bad code on every doc
        - to solve use the code as see on [eslintrc.json](.eslintrc.json)
    - [disabling esling rules](https://nextjs.org/docs/basic-features/eslint#disabling-rules)
    - ERROR: Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
        - for this error, you simple have to put parenthesis around the return statement and make sure its on a separate line. To do this, I added a comment
        - See [HERE](https://reactjs.org/docs/error-decoder.html/?invariant=152&args%5B%5D=BookLink)

### Server Side Vs. Static Rendering

-   Server Side
    -   MPA multiple pages are rendered on the server,
    -   the server serves up a new hTml doc on each request
    -   broswer loads & parses CSS to paint the UI
    -   browser then loads & parses deferred JS to enhance the UI
    -   browser caches assets for faster page load
    -   server can cache static HTML on a CDN to decrease the load
    -   Pros
        -   fast first meaningful paint
        -   better perceived performance
        -   SEO-friendly
    -   Cons
        -   increased load on the server
        -   latency due to page requests / reloads
        -   low UI / UX interactivity
-   Client Side
    -   each page is rendered on the clinet, not on the server
    -   server serrves a single static index.html document
    -   site can be served from a CDN
        -   A content delivery network, or content distribution network, is a geographically distributed network of proxy servers and their data centers.
    -   Pros
        -   decrease load on server
        -   static hosting & hosting (front end is gucci)
        -   decoupled architecture: existed as separate from backend
    -   Cons
        -   slow intitial render
        -   heavy JS dependency
        -   non-SEO friendly
        -   poor accessibility
    -   Summary
        -   if only using one page, probably just use static site
            -   also if using something for dynamic web apps
        -   You can do both with Server-rendered React SPA

### misc

1. making readme files: markdown syntax
    - [cheat sheet](https://www.markdownguide.org/cheat-sheet/)
2. [generating fake data](https://www.mockaroo.com/)
3. [converting data to sql](https://wtools.io/convert-excel-to-sql-queries)
4. using google books API
    - sql db for the summaries, and data fetching;
    - google api for the book confirmation
