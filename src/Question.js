import Choice from "./Choice";

const Question = ({ question, handleChange, selected }) => {
  // console.log(question.id)
 
  return (
    <div>
      <p>{question.text}</p>
      <div className="choices">
        {question.choices.map((choice) => {
          return (
            <Choice
              handleChange={handleChange}
              name={question.id}
              value={choice.name}
              label={choice.label}
              key={choice.name}
              checked={selected.includes(choice.name)}
            />
          );
        })}
      </div>
    </div>
  );
}


export default Question;
