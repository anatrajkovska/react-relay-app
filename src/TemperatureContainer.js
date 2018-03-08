import React from 'react';

class TemperatureContainer extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            tempValue: ''
        }
    }
    onChange(event){
        this.setState({tempValue:event.target.value})
    }
    onClick(event){
        console.log(event)
    }
    render() {
        return (
            <div className="temperature-container">
                <h3>Get weather data</h3>
                <label>Enter city</label>
                <input type="text" value={this.state.tempValue} onChange={this.onChange.bind(this)}/>
                <button onClick={this.onClick.bind(this)}>Get Data</button>
            </div>
        )

    }
}
export default TemperatureContainer;