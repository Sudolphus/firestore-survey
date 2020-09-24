import React, {useState} from "react";
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SurveyCreatorComponent(props) {
  const { surveyToEdit, initialState } = props;
  const [questionsToAsk, setQuestionsToAsk] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const defaultTitle = surveyToEdit ? surveyToEdit.title : null;

  const addQuestionToSurvey = () => {
    setQuestionsToAsk(questionsToAsk + 1);
    const newInput = { id: `question${questionsToAsk}`, value: ''};
    setFormData([...formData, newInput]);
  }

  const onChange = (element, index) => {
    setFormData([
      ...formData.slice(0, index),
      {...formData[index], value : element.target.value},
      ...formData.slice(index+1)
    ]);
  }

  const onSubmittingSurvey = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const questions = [];
    const answers = [];

    formData.map(x => {
      questions.push(x.value) 
      answers.push([]);
      return null;
    });

    const newSurvey = {
      title,
      questions,
      answers,
      user: 'user1',
      surveyId: surveyToEdit ? surveyToEdit.surveyId : null
    }
    props.onAddSurvey(newSurvey);
  }
  

  return (
    <React.Fragment>
      <Form onSubmit = {onSubmittingSurvey}>
        <Form.Group controlId = 'title'>
          <Form.Label>Title for your survey</Form.Label>
          <Form.Control type='text' defaultValue = {defaultTitle} />
        </Form.Group>
        {formData.map((q, ind) => {
          return (
            <Form.Group controlId = {q.id} key={q.id}>
              <Form.Label>What Question Do You Want To Ask</Form.Label>
              <Form.Control type='text' value={q.value} onChange={elem => onChange(elem,ind)}/>
            </Form.Group>
          )
        })}
        <Button type='button' variant='info' onClick = {() => {addQuestionToSurvey()}}>Add a Question</Button><br />
        <Button type='submit' variant='success'>Submit Survey</Button>
      </Form>
    </React.Fragment>
  );
};


SurveyCreatorComponent.propTypes = {
  onAddSurvey: PropTypes.func,
  surveyToEdit: PropTypes.object,
  initialState: PropTypes.array
}

export default SurveyCreatorComponent;