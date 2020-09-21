import React from 'react';
import Button from 'react-bootstrap/Button';

const dummy1 = ['yes', 'no', 'maybe'];
const dummy2 = ['true', 'false', 'i hate this'];
const responses = [{question: 'question 1', answers: dummy1}, {question: 'question 2', answers: dummy2}];

function SurveyResults() {
  return (
    <React.Fragment>
      <h2>Survey Title</h2>
      {responses.map((response, index) => (
        <div key={'div' + index}>
          <p>{response.question}</p>
          <ol>
            {response.answers.map((answer, index2) => 
              <li key={'li' + index + index2}>{answer}</li>
            )}
          </ol>
        </div>
      ))}
    <Button variant='danger' type='button'>Your Survey List</Button>
    </React.Fragment>
  )
}

export default SurveyResults;