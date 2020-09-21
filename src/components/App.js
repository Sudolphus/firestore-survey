import React, {useState} from 'react';
import * as d from './DisplayTypes';
import Header from './Header';
import SurveyCreatorComponent from './SurveyCreatorComponent';
import SurveyList from './SurveyList';
import Survey from './Survey';
import SurveyResults from './SurveyResults';
import LandingPage from './LandingPage';

function App() {
  const [display, setDisplay] = useState(d.LANDING_PAGE);

  let pageToDisplay;
  if (display === d.CREATE) {
    pageToDisplay = <SurveyCreatorComponent />
  } else if (display === d.SURVEY_LIST) {
    pageToDisplay = <SurveyList />
  } else if (display === d.SURVEY) {
    pageToDisplay = <Survey />
  } else if (display === d.SURVEY_RESULT) {
    pageToDisplay = <SurveyResults />
  } else if (display === d.LANDING_PAGE) {
    pageToDisplay = <LandingPage />  
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
