import React from 'react';

const Card = ({robotId , id , name ,email}) =>{
    if(robotId == undefined){
        robotId = id
    }
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${robotId}?200*200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
};
export default Card;