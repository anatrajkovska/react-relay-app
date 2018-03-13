import React from 'react';
import graphql from 'relay-runtime';
import {fetchQuery} from './fetchQuery';

class TemperatureContainer extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            cityValue: ''
        }
    }
    onChange(event){
        this.setState({cityValue:event.target.value})
    }
    onClick(event){
        console.log('click')
        let query = graphql`
        query TemperatureContainerQuery{
            getCurrentTemperature(city: "Bitola"){
              value
            }
          }
        `;

        query = query().text;
        fetchQuery(query).then(data => {
            console.log(data)
        })
        // let data = res
        // console.log(result)
    }
    render() {
        return (
            <div className="temperature-container">
                <h3>Get weather data</h3>
                <label>Enter city</label>
                <input type="text" value={this.state.cityValue} onChange={this.onChange.bind(this)}/>
                <button onClick={this.onClick.bind(this)}>Get Data</button>
            </div>
        )

    }
}
export default TemperatureContainer;