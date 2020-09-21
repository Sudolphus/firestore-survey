import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Survey(){
  return(
    <React.Fragment>
      <h2>Title</h2>
      <Form>
        <Form.Group controlId='question1'>
          <Form.Label>Question 1</Form.Label>
          <Form.Control as='textarea' rows='5' type='text' />
        </Form.Group>
        <Form.Group controlId='question2'>
          <Form.Label>Question 2</Form.Label>
          <Form.Control as='textarea' rows='5' type='text' />
        </Form.Group>
        <Form.Group controlId='question3'>
          <Form.Label>Question 3</Form.Label>
          <Form.Control as='textarea' rows='5' type='text' />
        </Form.Group>
        <Button type='button' variant='info'>Submit</Button>
        <Button type='button' variant='info'>Return to Survey List</Button>
      </Form>
    </React.Fragment>
  )
}

export default Survey;