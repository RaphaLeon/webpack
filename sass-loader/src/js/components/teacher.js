import React from 'react';

function Teacher(props) {
    return(
        <li>
            {props.name}
            <a href={`https://twitter.com/${props.twitter}`}> {props.twitter}</a>
        </li>
    )
}

export default Teacher;
