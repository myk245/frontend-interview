import { SelectAllRounded } from "@material-ui/icons";

const Choice = ({ name, value, label, handleChange}) => {
  return (
    <label>
      <input
        name={name}
        type="checkbox"
        value={value}
        onChange={handleChange}
      />
      {label}
    </label>
  );
}

export default Choice;
