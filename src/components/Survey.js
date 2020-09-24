import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Survey(props){
  const { surveyToTake } = props;
  const [surveyData, setSurveyData] = useState(props.surveyState);

  const onChange = (element, index) => {
    setSurveyData([
      ...surveyData.slice(0, index),
      {...surveyData[index], userAnswer: element.target.value},
      ...surveyData.slice(index+1)
    ])
  }

  const handleSubmitSurvey = (event) => {
    event.preventDefault();
    for (let i = 0; i < surveyToTake.answers.length; i++) {
      surveyToTake.answers[i].push(surveyData[i].userAnswer);
    }
  }


  return(
    <React.Fragment>
      <h2>{surveyToTake.title}</h2>
      <Form onSubmit={handleSubmitSurvey}>
        {surveyData.map((q, index) => {
          return (
            <Form.Group controlId = {q.id} key={q.id}>
              <Form.Label>{q.question}</Form.Label>
              <Form.Control as='textarea' rows='5' type='text' value={q.userAnswer} onChange={elem => onChange(elem, index)} />
            </Form.Group>
          )
        })}
        <Button type='button' variant='info'>Submit</Button>
        <Button type='button' variant='info'>Return to Survey List</Button>
      </Form>
    </React.Fragment>
  )
}

export default Survey;