import React from 'react';

function Photo(props){
    return(
        <div style={{marginBottom: "20px"}}>
            <b>Title:</b> {props.data.title}
            <br />
            <img src={props.data.thumbnailUrl} />
        </div>
    )
}

export default Photo;