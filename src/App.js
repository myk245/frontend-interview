import Question from "./Question";
import questions from "./questions";
import "./App.css";

const App = () => (
  <main className="App">
    <h1 className="App-title">Risk Assessment</h1>
    <div>You must select at least one value for each question</div>
    <form>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <div>
        <button type="submit">Next</button>
      </div>
    </form>
  </main>
);

export default App;
