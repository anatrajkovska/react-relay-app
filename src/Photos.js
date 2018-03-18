import React from 'react';
import Photo from './Photo'

function Photos(props){
    return(
        <div>
            <h4>Photos:</h4>
            {props.photos.map(photo => {
                return <Photo data={photo} key={photo.id} /> 
            })}
        </div>
    )
}
export default Photos;