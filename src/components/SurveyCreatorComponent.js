import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SurveyCreatorComponent() {
  const [questionsToAsk, setQuestionsToAsk] = useState([1]);
  
  const addQuestionToSurvey = () => {
    setQuestionsToAsk([...questionsToAsk, questionsToAsk[questionsToAsk.length-1]+1]);
  }

  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId = 'title'>
          <Form.Label>Title for your survey</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        {questionsToAsk.map(ind => {
          return (
            <Form.Group controlId = {`question${ind}`} key={`question${ind}`}>
              <Form.Label>What Question Do You Want To Ask</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          )
        })}
        <Button type='button' variant='info' onClick = {() => {addQuestionToSurvey()}}>Add a Question</Button><br />
        <Button type='submit' variant='success'>Submit Survey</Button>
      </Form>
    </React.Fragment>
  );
};

export default SurveyCreatorComponent;