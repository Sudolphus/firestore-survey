import React, {useState} from 'react';
import * as d from './DisplayTypes';
import Header from './Header';
import SurveyCreatorComponent from './SurveyCreatorComponent';
import CreatedSurveys from './CreatedSurveys';

function App() {
  const [display, setDisplay] = useState(d.CREATE);

  let pageToDisplay;
  if (display === d.CREATE) {
    pageToDisplay = <SurveyCreatorComponent />
  } else if (display === d.SURVEY_LIST) {
    pageToDisplay = <CreatedSurveys />
  }

  return (
    <React.Fragment>
      <Header />
      <button type='button' onClick={()=>setDisplay(d.CREATE)}>Create Survey Page</button>
      <button type='button' onClick={()=>setDisplay(d.SURVEY_LIST)}>View Surveys Page</button>
      {pageToDisplay}
    </React.Fragment>
  )
}

export default App;
