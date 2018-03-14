import React from 'react';
import graphql from 'relay-runtime';
import { fetchQuery } from './fetchQuery';

class TemperatureContainer extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            cityValue: '',
            tempValue:''
        }
    }
    onChange(event){
        this.setState({cityValue:event.target.value})
    }
    onClick(event){
        let query = graphql`
            query TemperatureContainerQuery($city: String) {
                getCurrentTemperature(city: $city) {
                    value
                }
            }          
        `;
        let variables = {city: this.state.cityValue};
        query = query().text;

        fetchQuery(query, variables).then(data => {
            if (data.data.getCurrentTemperature){
                this.setState({tempValue: data.data.getCurrentTemperature.value})
            } else {
                this.setState({tempValue: "unknown"})
            } 
        });
    }
    render() {
        return (
            <div className="temperature-container">
                <h3>Get weather data</h3>
                <label>Enter city: </label>
                <input type="text" value={this.state.cityValue} onChange={this.onChange.bind(this)}/>
                <button onClick={this.onClick.bind(this)}>Get Data</button>
                <h4>Please choose one of the following cities: 	Skopje, Bitola, Veles, Shtip, Prilep, Gevgelija, Kumanovo</h4>
                <div>
                    Current temperature for city {this.state.cityValue} is {this.state.tempValue} degrees.
                </div>
            </div>
        )

    }
}
export default TemperatureContainer;