import React from 'react';
import graphql from 'relay-runtime';
import { fetchQuery } from './fetchQuery';

class CurrentTimeContainer extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            continentValue: '',
            cityValue: '',
            timeValue:''
        }
    }
    onContinentChange(event){
        this.setState({continentValue:event.target.value})
    }

    onCityChange(event){
        this.setState({cityValue:event.target.value})
    }
    onClick(event){
        let query = graphql`
            query CurrentTimeContainerQuery($continent: String, $city:String){
                getCurrentTime(continent: $continent, city: $city){
                    time
                }
            }
        `
        query = query().text

        let variables = {
            continent: this.state.continentValue,
            city: this.state.cityValue
        };

        fetchQuery(query, variables).then(data => {
            if (data.data.getCurrentTime) {
                this.setState({timeValue: data.data.getCurrentTime.time})
            } else if(data.errors){
                this.setState({timeValue: 'unknown'})
            }
        })
    }
    render() {
        return (
            <div className="current-time-container">
                <h3>Get current time for capital cities</h3>
                <label>Enter continent: </label>
                <input type="text" value={this.state.continentValue} onChange={this.onContinentChange.bind(this)}/>
                <label> Enter city: </label>
                <input type="text" value={this.state.cityValue} onChange={this.onCityChange.bind(this)}/>
                <button onClick={this.onClick.bind(this)}>Get Data</button>
                <div>
                    The current time in the city {this.state.cityValue} in the continent {this.state.continentValue} is {this.state.timeValue}.
                </div>
            </div>
        )

    }
}
export default CurrentTimeContainer;