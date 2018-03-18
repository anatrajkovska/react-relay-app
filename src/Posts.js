import React from 'react';
import Post from './Post';

function Posts(props){
    return (
        <div>
            <h4>Posts:</h4>
            {props.posts.map(post => {
                return <Post data={post} />
            })}

        </div>
    )
}

export default Posts;