import React from 'react';
import Posts from './Posts'

class PostsContainer extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{marginTop: "30px", width: "50%"}}>
                <Posts posts={this.props.posts} />
            </div>
        )
    }
}

export default PostsContainer;
