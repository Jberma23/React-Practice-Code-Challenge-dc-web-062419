import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return (
            <Sushi key={sushi.id} sushi={sushi} eatenSushi={props.beenEaten} />
          );
        })}
        <MoreButton nextSushi={props.nextSushi} eatenSushi={props.eatenSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
