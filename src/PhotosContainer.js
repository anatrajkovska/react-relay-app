import React from 'react';
import Photos from './Photos';

class PhotosContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style= {{marginTop: "30px", width : "50%"}}>
                <Photos photos={this.props.photos} />
            </div>
        )
    }
}

export default PhotosContainer;