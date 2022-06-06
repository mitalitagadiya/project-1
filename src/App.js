import React, { Component } from 'react';
import Demo from './Component/Demo';
import City from './Containers/City';
import Cityfun from './Containers/Cityfun';
import Country from './Containers/Country';
import Countryfun from './Containers/Countryfun';
import Time from './Containers/Time/Time';


class App extends Component {
  render() {
    return (
      <div>
        {/* <City />
        <Cityfun /> */}
        {/* <Country /> */}
        {/* <Countryfun /> */}
        <Time />
      </div>
    );
  }
}


export default App;