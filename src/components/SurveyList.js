import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import * as d from './DisplayTypes';
import Button from 'react-bootstrap/Button';

function SurveyList(props) {
  const { surveys, user, onChangingSurvey, onClickingLink, onDeleteSurvey } = props;
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const onDeleteClick = (id) => {
    onDeleteSurvey(id);
    forceUpdate();
  }

  const handleSurveyResult = (surveyId) => {
    const selectedSurvey = surveys.filter(survey => survey['surveyId'] === surveyId)[0];
    onChangingSurvey(selectedSurvey);
    onClickingLink(d.SURVEY_RESULT);
  };

  const resultsButtonCalc = (surveyId) => {
    if (user) {
      return <Button variant='info' type='button' onClick = {() => handleSurveyResult(surveyId)}>View Results</Button>
    } else {
      return null;
    }
  }
  const editButton = user ? <Button variant='warning' type='button'>Edit</Button> : null;
  const deleteButton= (surveyId) => {
    if (user) {
      return <Button variant='danger' type='button' onClick={()=>onDeleteClick(surveyId)}>Delete</Button>
    } else {
      return null;
    }
  }

  return (
    <React.Fragment>
      <ol>
      {surveys.map((survey) =>
        <li key={survey.surveyId}>
          <Button>{survey.title}</Button>
          {resultsButtonCalc(survey.surveyId)}
          {editButton}
          {deleteButton(survey.surveyId)}
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