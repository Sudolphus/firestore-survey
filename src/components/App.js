import React, {useState} from 'react';
import * as d from './DisplayTypes';
import Header from './Header';
import SurveyCreatorComponent from './SurveyCreatorComponent';
import SurveyList from './SurveyList';
import Survey from './Survey';
import SurveyResults from './SurveyResults';
import LandingPage from './LandingPage';

const survey1 = {
  title: 'Test Survey1',
  questions: ['Question 1', 'Question 2', 'Question 3'],
  answers: [['answer1', 'answer2'], ['test2', 'test3'], ['Xorbatrone']],
  user: 'user1',
  surveyId: 1
}

const survey2 = {
  title: 'Test Survey2',
  questions: ['Question 1', 'Question 2', 'Question 3'],
  answers: [['answer1asdfasd', 'answer2'], ['test2', 'test3asdfasd'], ['Xorbatroneifom']],
  user: 'user1',
  surveyId: 2
}

const survey3 = {
  title: 'Test Survey3',
  questions: ['Question 1', 'Question 2', 'Question 3'],
  answers: [['answer1', 'answer2'], ['test2', 'test3'], ['Xorbatrone']],
  user: 'user3',
  surveyId: 3
}

let surveys = [survey1, survey2, survey3];

function App() {
  const [display, setDisplay] = useState(d.LANDING_PAGE);
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  const handleAddSurvey = (newSurvey) => {
    newSurvey = {...newSurvey, surveyId: surveys.length + 1}
    surveys = [...surveys, newSurvey];
    setDisplay(d.LANDING_PAGE);
    setSelectedSurvey(null);
  }

  let pageToDisplay;
  if (display === d.CREATE) {
    pageToDisplay = <SurveyCreatorComponent onAddSurvey={handleAddSurvey} />
  } else if (display === d.SURVEY_LIST) {
    pageToDisplay = <SurveyList />
  } else if (display === d.SURVEY) {
    pageToDisplay = <Survey />
  } else if (display === d.SURVEY_RESULT) {
    pageToDisplay = <SurveyResults 
                      survey={selectedSurvey}
                      onClickingLink={setDisplay} />
  } else if (display === d.LANDING_PAGE) {
    pageToDisplay = <LandingPage
                      surveys = {surveys}
                      onClickingLink={setDisplay}
                      onChangingSurvey={setSelectedSurvey} />  
  }
  
  return (
    <React.Fragment>
      <Header />
      <button type='button' onClick={()=>setDisplay(d.CREATE)}>Create Survey Page</button>
      <button type='button' onClick={()=>setDisplay(d.SURVEY_LIST)}>View Surveys Page</button>
      <button type='button' onClick={()=>setDisplay(d.SURVEY)}>View Surveys</button>
      <button type='button' onClick={()=>setDisplay(d.SURVEY_RESULT)}>View Survey Results</button>
      <button type='button' onClick={()=>setDisplay(d.LANDING_PAGE)}>View Landing Page</button>

      {pageToDisplay}
    </React.Fragment>
  )
}

export default App;
