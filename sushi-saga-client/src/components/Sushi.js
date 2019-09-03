import React, { Fragment } from "react";

const Sushi = props => {
  const { name, img_url, price } = props.sushi;
  return (
    <Fragment>
      <div className="sushi">
        <div className="plate" onClick={() => props.eatenSushi(props.sushi)}>
          {props.sushi.beenEaten === true ? null : (
            <img src={img_url} alt={name} width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    </Fragment>
  );
};

export default Sushi;
