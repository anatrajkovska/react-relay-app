import React from 'react';

class CurrentTimeContainer extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            continentValue: '',
            cityValue: ''
        }
    }
    onContinentChange(event){
        this.setState({continentValue:event.target.value})
    }

    onCityChange(event){
        this.setState({cityValue:event.target.value})
    }
    onClick(event){
        console.log(event)
    }
    render() {
        return (
            <div className="current-time-container">
                <h3>Get current time</h3>
                <label>Enter continent</label>
                <input type="text" value={this.state.continentValue} onChange={this.onContinentChange.bind(this)}/>
                <label>Enter city</label>
                <input type="text" value={this.state.cityValue} onChange={this.onCityChange.bind(this)}/>
                <button onClick={this.onClick.bind(this)}>Get Data</button>
            </div>
        )

    }
}
export default CurrentTimeContainer;