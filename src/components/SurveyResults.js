import React from 'react';
import PropTypes from 'prop-types';
import * as d from './DisplayTypes';
import Button from 'react-bootstrap/Button';

function SurveyResults(props) {
  const { survey, onClickingLink } = props;
  const { title, questions, answers } = survey;
  return (
    <React.Fragment>
      <h2>{title}</h2>
      {questions.map((question, index) => (
        <div key={'div' + index}>
          <p>{question}</p>
          <ol>
            {answers[index].map((answer, index2) => 
              <li key={'li' + index + index2}>{answer}</li>
            )}
          </ol>
        </div>
      ))}
    <Button variant='danger' type='button' onClick={()=>onClickingLink(d.LANDING_PAGE)}>Your Survey List</Button>
    </React.Fragment>
  )
}

SurveyResults.propTypes = {
  survey: PropTypes.object,
  onClickingLink: PropTypes.func
}

export default SurveyResults;