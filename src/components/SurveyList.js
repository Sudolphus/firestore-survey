import React from 'react';
import PropTypes from 'prop-types';
import * as d from './DisplayTypes';
import Button from 'react-bootstrap/Button';

function SurveyList(props) {
  const { surveys, user, onChangingSurvey, onClickingLink, onDeleteSurvey} = props;

  const onEditClick = (id) => {
    const surveyToEdit = surveys.filter(survey => survey.surveyId === id)[0];
    onChangingSurvey(surveyToEdit);
    onClickingLink(d.CREATE);
  }

  const onTakingSurveyClick = (id) => {
    const surveyToTake = surveys.filter(survey => survey.surveyId === id)[0];
    onChangingSurvey(surveyToTake);
    onClickingLink(d.SURVEY);
  }

  const handleSurveyResult = (surveyId) => {
    const selectedSurvey = surveys.filter(survey => survey['surveyId'] === surveyId)[0];
    onChangingSurvey(selectedSurvey);
    onClickingLink(d.SURVEY_RESULT);
  };

  const resultsButton = (surveyId) => {
    if (user) {
      return <Button variant='info' type='button' onClick = {() => handleSurveyResult(surveyId)}>View Results</Button>
    } else {
      return null;
    }
  }

  const editButton = (surveyId) => { 
    if (user) {
      return <Button variant='warning' type='button' onClick={() => onEditClick(surveyId)}>Edit</Button>
    } else {
      return null;
    }
  }

  const deleteButton= (surveyId) => {
    if (user) {
      return <Button variant='danger' type='button' onClick={()=>onDeleteSurvey(surveyId)}>Delete</Button>
    } else {
      return null;
    }
  }

  const takeSurveyButton = (surveyId) => {
    if (!user) {
      return <Button variant='info' type='button' onClick={()=>onTakingSurveyClick(surveyId)}>Take Survey</Button>
    } else {
      return null;
    }
  }

  return (
    <React.Fragment>
      <ol>
      {surveys.map((survey) =>
        <li key={survey.surveyId}>
          {survey.title}
          {resultsButton(survey.surveyId)}
          {editButton(survey.surveyId)}
          {deleteButton(survey.surveyId)}
          {takeSurveyButton(survey.surveyId)}
        </li>
      )}
      </ol>
    </React.Fragment>
  )
}

SurveyList.propTypes = {
  surveys: PropTypes.arrayOf(Object),
  user: PropTypes.bool,
  onClickingLink: PropTypes.func,
  onChangingSurvey: PropTypes.func,
  onDeleteSurvey: PropTypes.func
}

export default SurveyList;