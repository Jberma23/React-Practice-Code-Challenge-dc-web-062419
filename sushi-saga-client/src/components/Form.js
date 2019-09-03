import React from "react";

const Form = props => {
  return (
    <div>
      <label>Add more money to your wallet</label>
      <form onSubmit={props.onSubmit}>
        <input type="number" />
        <button type="submit">Add Funds</button>
      </form>
    </div>
  );
};
export default Form;
