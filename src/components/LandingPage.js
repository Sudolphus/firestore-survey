import React from 'react';
import PropTypes from 'prop-types';
import * as d from './DisplayTypes';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SurveyList from './SurveyList';

function LandingPage(props) {
  const { surveys } = props;
  const user = 'user1';
  const userSurveys = surveys.filter(survey => survey['user'] === user);
  const otherSurveys = surveys.filter(survey => survey['user'] !== user);
  
  const onCreateClick = () => {
    props.onChangingSurvey(null);
    props.onClickingLink(d.CREATE);
  }

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Button variant='info' type='button' onClick={onCreateClick}>Create a Survey!</Button>
          <SurveyList 
            surveys={userSurveys}
            user={true}
            onChangingSurvey={props.onChangingSurvey}
            onClickingLink={props.onClickingLink}
            onDeleteSurvey ={props.onDeleteSurvey}
            />
        </Col>
        <Col>
          <SurveyList 
            surveys={otherSurveys}
            user={false} 
            onChangingSurvey={props.onChangingSurvey}
            onClickingLink={props.onClickingLink}
            />
        </Col>
      </Row>
    </React.Fragment>
  )
}

LandingPage.propTypes = {
  surveys: PropTypes.array,
  onClickingLink: PropTypes.func,
  onChangingSurvey: PropTypes.func,
  onDeleteSurvey: PropTypes.func,
  onTakingSurvey: PropTypes.func
}

export default LandingPage;