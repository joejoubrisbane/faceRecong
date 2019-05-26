import React from 'react';
import Card from '../Card/card';
import _ from 'lodash'

const CardList = ({robots}) =>{
    const cardComponent = _.map(robots , (robot) =>(
        <Card
            key={robot.id}
            robotId={robot.robotId}
            id={robot.id}
            name={robot.name}
            email ={robot.email}
        />
    ) );

    return (
        <div>
           {cardComponent}
        </div>
    )
};





export default CardList;