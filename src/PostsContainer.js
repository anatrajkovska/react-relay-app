import React from 'react';
import {fetchQuery} from './fetchQuery';
import graphql from 'relay-runtime';
import Posts from './Posts'

class PostsContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        };
    }

    onClick(){
        let query = graphql`
          query PostsContainerQuery{
            getPosts {
              title
              body
              userId
            }
          }
        `
        query = query().text

        fetchQuery(query).then(data => {
            this.setState({posts: data.data.getPosts})
        })
    }
    render() {
        return (
            <div style={{marginTop: "30px"}}>
                <button onClick={this.onClick.bind(this)}>Get Posts</button>
                <Posts posts={this.state.posts} />
            </div>
        )
    }
}

export default PostsContainer;
