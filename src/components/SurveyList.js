import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function SurveyList(props) {
  const { surveys, user } = props;
  const resultsButton = user ? <Button variant='info' type='button'>View Results</Button> : null;
  const editButton = user ? <Button variant='warning' type='button'>Edit</Button> : null;
  const deleteButton = user ? <Button variant='danger' type='button'>Delete</Button> : null;

  return (
    <React.Fragment>
      <ol>
      {surveys.map((survey, index) =>
        <li key={index}>
          <Button>{survey.title}</Button>
          {resultsButton}
          {editButton}
          {deleteButton}
        </li>
      )}
      </ol>
    </React.Fragment>
  )
}

SurveyList.propTypes = {
  surveys: PropTypes.arrayOf(Object),
  user: PropTypes.bool
}

export default SurveyList;