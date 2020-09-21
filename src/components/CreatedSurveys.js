import React from 'react';
import Button from 'react-bootstrap/Button';

const dummySurvey = ["sillySurvey", "seriousSurvey", "toManyQuestionSurvey"]

function CreatedSurveys() {
  return (
    <React.Fragment>
      {dummySurvey.map((survey, index) =>
        <div key={index}>
          <a>{survey}</a>
          <Button variant='warning' type='button'>Edit</Button>
          <Button variant='danger' type='button'>Delete</Button>
        </div>
      )}
    </React.Fragment>
  )
}

export default CreatedSurveys