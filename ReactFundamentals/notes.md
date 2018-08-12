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

React follows declarative programming so that programmers do not have to specify on how to do DOM manipulation, rather programmers provide what the page should look like and React automatically does DOM manipulation for us.

### What is JSX?

JSX stands for JavaScript and XML. This is a type of filed used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file easy to understand.

### Component

Components are the building-blocks of React application. Since it is follow the component-based approach, it allows us build reusable UI components. These components split up the entire UI in to small independent and reusable pieces. Then React renders each of these components independent of each other without affecting the rest of the UI.

### Render Method

Every React component must have a render() method mandatorily. It returns a single JSX element which is the representation of the native DOM component. If more than one JSX element needs to be rendered, then they can be grouped in one enclosing tag.

### Props

Props, also known as properties in React. They are read-only properties which must be kept pure i.e. immutable. They are passed down from parent components to child components and they are never passed from child components to parent components and this is due to the uni-directional data flow nature of React.

### State

State are the heart of React component. State are the source of data and must be kept simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike props and create dynamic and interactive components.

### Arrow Functions in React

Arrow functions are more of brief syntax for writing the function expression. These function help us bind the context of the components properly since in ES6 auto binding is not available by default.

```js
//General way
render() {    
    return(
        <MyInput onChange={this.handleChange.bind(this) } />
    );
}
//With Arrow Function
render() {  
    return(
        <MyInput onChange={ (e) => this.handleOnChange(e) } />
    );
}
```

### Class Component vs Functional Component

Functional component are components primarily concerned with the UI of the application, not on the behavior. They are usually do not hold their state and receive props from class components. They also cannot make use of lifecycle methods.  

On the other hand, class components are components primarily concerned with the behavior of the application, not necessarily the UI. They tend to hold the state of the application and have access to lifecycle methods. Inside the class components, all declared functions are accessed using the keyword ```this```.


### Container Component vs. Presentational Component


- Container components are primarily concerned with how things work

- They rarely have any HTML markup of their own, aside from a wrapping ```<div>```;

- They are often stateful

- They are responsible for providing data and behavior to their children (usually presentational components).

- Presentational components are primarily concerned with how things look

- If they are class components, they probably only contain a render method. If functional, they just return some JSX

- They do not know how to alter the data that they render

- They rarely have any internally changeable state properties

- They are best written as stateless functional components

### Controlled vs Uncontrolled Component

A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

### Component Lifecycle

There are three phases that components go through:

1. Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.
2. Updating Phase: This is the phase when the component re-renders and update only when a prop or state change occurs.
3. Unmounting Phase: This is the phase when the component ends its life journey and destroyed and removed from the DOM.

#### Component Lifecycle Methods

1. componentWillMount() - executed right before the rendering takes place
2. componentDidMount() - executed right after the rendering
3. componentWillReceiveProps() - Executed as soon as the props are received from the parent and before another render is called
4. shouldComponentUpdate() - Returns true or false based on certain conditions. If you want the component updated, return true. Otherwise, return false.
5. componentWillUpdate() - Executed just before the rendering takes place
6. componentDidUpdate() - Executed right after the rendering takes place
7. componentWillUnmount() - Executed after the component is unmounted from the DOM. It is used to clear up the memory spaces.

### Events

Events are triggered reactions to a specific action like mouse over, mouse click, key press, etc... Handling events in React is very similar to handling events in the real DOM, expect the only difference how we specify the event. In real DOM, we specify the event name using lowercase, however in React, we use camelCase.

#### Synthetic Events

Synthetic events are the objects which act as a cross-browser wrapper around the browser's native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.

### Ref

### Higher Order Components

### Redux

Redux is a predictable state container for JS applications and is used for the entire applications state management.

### Principles of Redux

1. Single source of truth - The state of the entire application is stored in an object within a single store. The single state tree makes it easier for us to keep track of changes over time. 
2. State is read-only - The only way to change the state is to trigger an action. An action is a plain JS object describing the change. The action is the minimal representation of the change to data.
3. Changes are made with pure functions: In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depends solely on the values of their arguments.
