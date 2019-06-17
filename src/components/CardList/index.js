import React from "react";
import Card from "../Card/card";
import _ from "lodash";

const CardList = ({ robots, firestore, history }) => {
  const cardComponent = _.map(robots, robot => (
    <Card history={history} firestore={firestore} key={robot.id} {...robot} />
  ));

  return <div>{cardComponent}</div>;
};

export default CardList;
