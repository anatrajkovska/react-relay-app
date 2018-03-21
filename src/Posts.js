import React from 'react';
import Post from './Post';

function Posts(props){
    return (
        <div>
            <h4>Posts:</h4>
            {props.posts.map((post, index) => {
                return <Post data={post} key={index} />
            })}

        </div>
    )
}

export default Posts;