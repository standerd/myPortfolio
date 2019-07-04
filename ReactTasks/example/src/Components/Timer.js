/* This is an example of a stateful component. We make this component stateful instead
of functional because we some of the data (this.state.seconds} associated with this component changes over time.

Because this is a steful component, it must be implemented using a class instead of a function. */

import React from 'react';

class Timer extends React.Component {
  /*Below is the class constructor. The main function of the constructor is to set the initial state of the component.*/
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

/*Notice that we change the state of the component in the method below. Remember: Never modify the state directly (e.g. this.state.seconds = 15;) 
because this won’t re-render the component. Always use this.setState(). */

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

/*componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
See more about componentDidMount here:https://reactjs.org/docs/react-component.html#componentdidmount

Notice that we use the setInterval() method here. the setInterval method repeatedly calls a function (this.tick(), 
with a fixed time delay between each call (1000 milliseconds). 

See more about setInterval here: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval */
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
/*componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. 
Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount(). */
  componentWillUnmount() {
    clearInterval(this.interval);
  }

/*Below is the method we use to render the component. Notice how we use the state info (using this.state) in this render method. */
  render() {
    return (
      <div>
        You have been viewing this page for {this.state.seconds} seconds.
      </div>
    );
  }
}

/* To be able to use the code that we have written in this module in a different module (e.g. App.js),
we have to export the code that we want to make available outside of this module. Below we export the class called 'Timer'.
Notice how we import this class in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default Timer;