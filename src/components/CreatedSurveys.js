import React from 'react';
import Button from 'react-bootstrap/Button';

const dummySurvey = ["sillySurvey", "seriousSurvey", "toManyQuestionSurvey"]

function CreatedSurveys() {
  return (
    <React.Fragment>
      <ol>
      {dummySurvey.map((survey, index) =>
        <li key={index}>
          <Button as='a'>{survey}</Button>
          <Button variant='info' type='button'>View Results</Button>
          <Button variant='warning' type='button'>Edit</Button>
          <Button variant='danger' type='button'>Delete</Button>
        </li>
      )}
      </ol>
    </React.Fragment>
  )
}

export default CreatedSurveys