/* 
Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with this.state.

If you want to access a state value within the return of the render method, you have to enclose the value in curly braces.

state is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.

Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.

In the code editor, MyComponent is already stateful. Define an h1 tag in the component's render method which renders the value of name from the component's state.

Note: The h1 should only render the value from state and nothing else. In JSX, any code you write with curly braces { } will be treated as JavaScript. So to access the value from state just enclose the reference in curly braces.
*/

class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }

  render() {

    return (
      <div>
        { /* change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );

  }

};

/*
Next Lesson:
There is another way to access state in a component. In the render() method, before the return statement, you can write JavaScript directly. For example, you could declare functions, access data from state or props, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement.

In the MyComponent render method, define a const called name and set it equal to the name value in the component's state. Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces.

Next, in the return statement, render this value in an h1 tag using the variable name. Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
    const name = this.state.name;
    // change code above this line
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
*/ 