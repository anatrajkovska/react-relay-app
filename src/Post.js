import React from 'react';

function Post(props){console.log(props)

    return(
        <div style={{marginBottom: "20px"}}>
            <b>Title:</b> {props.data.title}
            <br />
            <b>Body:</b> {props.data.body}
            <br />            
            <b>UserId:</b> {props.data.userId}     
        </div>
    )
}

export default Post;