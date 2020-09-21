import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SurveyList from './SurveyList';

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

const surveys = [survey1, survey2, survey3];

function LandingPage() {
  const user = 'user1';
  const userSurveys = surveys.filter(survey => survey['user'] === user);
  const otherSurveys = surveys.filter(survey => survey['user'] !== user);
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Button variant='info' type='button'>Create a Survey!</Button>
          <SurveyList 
            surveys={userSurveys}
            user={true} />
        </Col>
        <Col>
          <SurveyList 
            surveys={otherSurveys}
            user={false} />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default LandingPage;