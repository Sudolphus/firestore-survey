import React, {useState} from 'react';
import * as d from './DisplayTypes';
import Header from './Header';
import SurveyCreatorComponent from './SurveyCreatorComponent';

function App() {
  const [display, setDisplay] = useState(d.CREATE);

  let pageToDisplay;
  if (display === d.CREATE) {
    pageToDisplay = <SurveyCreatorComponent />
  }

  return (
    <React.Fragment>
      <Header />
      {pageToDisplay}
    </React.Fragment>
  )
}

export default App;
