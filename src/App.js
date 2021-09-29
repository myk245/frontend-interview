import { useState } from 'react';
import Question from "./Question";
import questions from "./questions";
import "./App.css";

const App = () => {
  const [selected, setSelected] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [errorShown, setErrorShown] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  
  const submitForm = (event) => {
    event.preventDefault();

    if (selected.length < 3 || selectedCategories.length < 3) {
      setErrorShown(true);
    } else {
      setSubmissionSuccess(true);
    }
  }

  const handleChange = (event) => {
    // console.log(event.target.checked);
    // console.log(event.target.name); 

    const selectedChoice = event.target.value;
    const questionCategory = event.target.name;

    let updatedSelected = selected.filter(choice => choice !== selectedChoice);

    let updatedSelectedCategories = selectedCategories.filter(category => category !== questionCategory)

    if (event.target.checked) {
      updatedSelected.push(selectedChoice);
      updatedSelectedCategories.push(questionCategory);
    }
    setSelected(updatedSelected);
    setSelectedCategories(updatedSelectedCategories);
  }

  console.log(selected)
  console.log(selectedCategories)

  return (
    <main className="App">
      <h1 className="App-title">Risk Assessment</h1>
      {errorShown === true && <div className="validation-error">You must select at least one value for each question</div>}
      {submissionSuccess === true && <div className="validation-success">Thank you!</div>}

        
      <form onSubmit={submitForm}>
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            handleChange={handleChange}
            selected={selected}
          />
        ))}
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
      
    </main>
    );
}

export default App;
