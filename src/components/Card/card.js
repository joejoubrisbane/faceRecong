import React from 'react';

const Card = (props) =>{
    return(
        <div className='db center mw5 tc black link dim'>
            <img className={'db ba b--black-10'} alt='robots' src={`https://robohash.org/${props.id}?200*200`}/>

            <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title:</dt>
                <dd className="ml0">{props.name}</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray">Email:{props.email}</dd>
            </dl>
        </div>
    )
}
export default Card;