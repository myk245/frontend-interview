import { useState } from 'react';
import Question from "./Question";
import questions from "./questions";
import "./App.css";

const App = () => {
  const [selected, setSelected] = useState([]);
  
  const submitForm = (event) => {
    event.preventDefault();
    console.log(selected);
    console.log(event.target);
  }

  return (
      <main className="App">
        <h1 className="App-title">Risk Assessment</h1>
        <div className="validation-error">You must select at least one value for each question</div>
        <form onSubmit={submitForm}>
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
          <div>
          <button type="submit">Next</button>
          </div>
        </form>
      </main>
    );
}

export default App;
