import React, { Fragment } from "react";

const Table = props => {
  const renderPlate = () => {
    return props.eatenSushi.map((x, index) => {
      return (
        <div className="empty-plate" key={index} style={{ top: -7 * index }} />
      );
    });
  };
  return (
    <Fragment>
      <h1 className="remaining">You have: ${props.budget} remaining!</h1>
      <div className="table">
        <div className="stack">{renderPlate()} </div>
      </div>
    </Fragment>
  );
};

export default Table;
