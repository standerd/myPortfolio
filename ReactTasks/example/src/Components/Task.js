/* This is an example of a functional component. We make this component functional instead
of stateful because we none of the data associated with this component changes over time.

Notice that we pass props to this component from App.js. The props passed through to this component is an
array of 'task' objects. In the Task function, we use the .map method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
to create a new array of <Col> elements that contain <Card> components. 

The <Col>, <Container> and <Card> Components are all React-Bootstap components.
 */

import React from 'react';
//See more about Card components here: https://react-bootstrap.github.io/components/cards/
import Card from 'react-bootstrap/Card';
//See more about Container, Row and Col components here: https://react-bootstrap.github.io/layout/grid/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tasks(props) {
    const listTasks = props.tasks.map((task) =>
    	<Col>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{task.task_name}</Card.Title>
    <Card.Text>
      {task.description}
    </Card.Text>
  </Card.Body>
</Card>
</Col>
    );
    return (
<Container>
  <Row>
   {listTasks}
  </Row>
</Container>
);
}

/* To be able to use the code that we have written in this module in a different module (e.g. App.js),
we have to export the code that we want to make available outside of this module. Below we export the function called 'Tasks'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default Tasks;