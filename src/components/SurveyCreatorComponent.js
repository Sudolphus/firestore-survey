import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SurveyCreatorComponent() { 
  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId = 'title'>
          <Form.Label>Title for your survey</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group controlId = 'question'>
          <Form.Label>What Question Do You Want To Ask</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Button type='button' variant='info'>Add a Question</Button><br />
        <Button type='submit' variant='success'>Submit Survey</Button>
      </Form>
    </React.Fragment>
  );
};

export default SurveyCreatorComponent;