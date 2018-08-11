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

**1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.**

**2. Then the difference between the previous DOM representation and the new one is calculated.**

**3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.**



- It updates fast
- It cannot directly update the HTML
- Updates the JSX if element updates
- DOM manipulation is very easy

### What are the features of React?

- it uses virtual DOM, rather than real ROM

#### Uni-directional Data Flow.

Data flows in one direction from parent to child. This makes tracking the source and destination easy.

#### Declarative Language

React follows declarative programming so that programmers do not have to specify on how to do DOM manipulation, rather programmers provide what the page should look like and React automatically DOM manipulation for us.

### What is JSX?

JSX stands for JavaScript and XML. This is a type of filed used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file easy to understand.

### Component

Components are the building-blocks of React application. Since it is follow the component-based approach, it allows us build reusable UI components. These components split up the entire UI in to small independent and reusable pieces. Then React renders each of these components independent of each other without affecting the rest of the UI. 
