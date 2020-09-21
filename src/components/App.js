import React, {useState} from 'react';
import * as d from './DisplayTypes';
import Header from './Header';
import SurveyCreatorComponent from './SurveyCreatorComponent';
import CreatedSurveys from './CreatedSurveys';
import Survey from './Survey';
import SurveyResults from './SurveyResults';

function App() {
  const [display, setDisplay] = useState(d.CREATE);

  let pageToDisplay;
  if (display === d.CREATE) {
    pageToDisplay = <SurveyCreatorComponent />
  } else if (display === d.SURVEY_LIST) {
    pageToDisplay = <CreatedSurveys />
  } else if (display === d.SURVEY) {
    pageToDisplay = <Survey />
  } else if (display === d.SURVEY_RESULT) {
    pageToDisplay = <SurveyResults />
  }
  return (
    <React.Fragment>
      <Header />
      <button type='button' onClick={()=>setDisplay(d.CREATE)}>Create Survey Page</button>
      <button type='button' onClick={()=>setDisplay(d.SURVEY_LIST)}>View Surveys Page</button>
      <button type='button' onClick={()=>setDisplay(d.SURVEY)}>View Surveys</button>
      <button type='button' onClick={()=>setDisplay(d.SURVEY_RESULT)}>View Survey Results</button>
      {pageToDisplay}
    </React.Fragment>
  )
}

export default App;
