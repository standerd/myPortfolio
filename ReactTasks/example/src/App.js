/*The App component is the container for all other React components. By default the App component is rendered by calling ReactDOM.render() in the index.js file */

import React, {Component} from 'react';
import './App.css';

/*Below we import all the Components we created in the 'Components' directory.
Remember that you can only import components, if you have added an export statement to the module
which defines the component. */
import Header from './Components/Header';
import Timer from './Components/Timer';
import Tasks from './Components/Task';

/* The variables that we create below will be passed as props to some of the components we have created.
In practice, these variables will often be populated from data read from a database or API. You will learn
more about this later. */
const loggedIn = true;
const tasks = [{id: "1", task_name: "Introduction to Version Control", description:"Learn what version control is, what Git is and how to install Git"}, 
{id: "2",   task_name: "Introduction to React", description:"This task, introduces ReactJS (a JavaScript library for building user interfaces) and guides you through setting up your environment and creating React Elements using JSX."}];

/*Notice how we add the <Header>, <Task> and <Timer>
components below. Notice that we also have a link to a stylesheet in this App.js component.
The reason for this is that we are using some components from React-Bootstrap.
https://react-bootstrap.github.io/getting-started/introduction/ */
class App extends Component {
  render() {
    return (
      <div className="App">
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
  crossorigin="anonymous"
/>
      <Header name="James" loggedIn={loggedIn}/>
      <Tasks tasks={tasks}/>
      <footer><Timer/></footer>
      </div>
    );
  }
}

//Notice that the App class of this module is exported. This is so that it can be imported and used in Index.js where the ReactDom.Render() method is called
//to render this App component.
export default App;