# React Fundamentals

### What is ReactJS?
- It is a front-end JS library developed by Facebook in 2011
- it follows the component based-approach which helps us build reusuable UI components.

### What is the difference between virtual DOM and DOM?

DOM, also known as the Document Object Model is the current representation of the the webpage on the browser and it can be manipulated without reloading the entire page.

Any changes that take place in the DOM affects the DOM only, not the HTML file which was initially loaded on the browser to render the page.

- It updates slow
- It can directly update the HTML
- For every new update, new DOM elements are created
- DOM manipulation is expensive.

Virtual DOM, also known as the Virtual Document Object Model is a virtual representation of what our document should look like. When we are ready to render things to the screen, React compares the virtual DOM with the real DOM and change only what is need to be changed.

- It updates fast
- It cannot directly update the HTML
- Updates the JSX if element updates
- DOM manipulation is very easy

### What are the features of React?

- it uses virtual DOM, rather than real ROM

#### Uni-directional Data Flow.

Data flows in one direction from parent to child. This makes tracking the source and destination easy.

 
