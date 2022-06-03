import React, { Component } from 'react';
import City from './City';

class  Country extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            CountryName : 'India'
        }
    }
    
    ChangeCountry = () => {
        this.setState({
            CountryName : 'US'
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.CountryName}</p>
                <button onClick={() => this.ChangeCountry()}>ChangeCountry</button>
                <City id="101"  Country_name ={this.state.CountryName}/>
            </div>
        );
    }
}

export default Country;