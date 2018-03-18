import React from 'react';
import graphql from 'relay-runtime'
import { fetchQuery } from './fetchQuery';
import Photos from './Photos';

class PhotosContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            photos: []
        }
    }
    onClick(){
        let query = graphql`
          query PhotosContainerQuery{
            getPhotos {
              title
              thumbnailUrl
              id
            }
          }
          
        `
        query = query().text
        fetchQuery(query).then(data => {
            this.setState({photos: data.data.getPhotos.slice(0, 10)})
        })
    }
    render(){
        return (
            <div style= {{marginTop: "30px", width : "50%"}}>
                <button onClick={this.onClick.bind(this)}>Get photos</button>
                <Photos photos={this.state.photos} />
            </div>
        )
    }
}

export default PhotosContainer;