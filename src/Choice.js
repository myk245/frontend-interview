const Choice = ({ name, value, label, handleChange}) => {
  return (
    <label className="label">
      <input
        name={name}
        type="checkbox"
        value={value}
        onChange={handleChange}
        className="checkbox"
      />
      {label}
    </label>
  );
}

export default Choice;
