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
              id
            }
          }
        `
        query = query().text

        fetchQuery(query).then(data => {
            this.setState({posts: data.data.getPosts.slice(0, 10)})
        })
    }
    render() {
        return (
            <div style={{marginTop: "30px", width: "50%"}}>
                <button onClick={this.onClick.bind(this)}>Get Posts</button>
                <Posts posts={this.state.posts} />
            </div>
        )
    }
}

export default PostsContainer;
