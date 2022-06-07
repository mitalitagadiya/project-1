import React, { Component } from 'react';
import Demo from './Component/Demo';
import City from './Containers/City';
import Cityfun from './Containers/Cityfun';
import Country from './Containers/Country';
import Countryfun from './Containers/Countryfun';
import Time from './Containers/Time/Time';
import Timefun from './Containers/Time/Timefun';


// class Time extends Component {

//   constructor(props) {
//       super(props);

//       // 1. Used to set intial value to the component.

//       this.state = {
//           Time: new Date()
//       }
//   }

//   tick = () => {
//       this.setState({
//           Time: new Date()
//       })
//   }

//   componentDidMount = () => {

//       // 3. Used to request date from server.

//       this.TimeI = setInterval(() => this.tick(), 1000);
//   }

//   componentDidUpdate = (PrevProps, PrevState) => {

//       // 4. called whenever particular state/props update.

//       if (this.state.Time !== PrevState.Time) {
//           console.log("componentDidUpdate");
//       }
//   }

//   componentWillUnmount = () => {

//       // 5. called whenever we move to another component (used to realise the resource).

//       clearInterval(this.TimeI);
//   }

//   // 2. called whenever state value changed.

//   render() {
//       return (
//           <div>
//               <p>{this.state.Time.toLocaleTimeString()}</p>
//           </div>
//       );
//   }
// }

// export default Time;




// function Timefun(props) {

//   const[Time, setTime] = useState(new Date());

//   const tick = () => {
//       setTime(new Date());
//   }

//   useEffect( () => {

//       // componentDidMount, componentDidupdate

//       const TimeI = setInterval(() => tick(), 1000);
      
//       // componentWillUnmount

//       return () => {
//           clearInterval(TimeI);
//       }
//    },[Time]);

// return (
//   <div>
//       <p>{Time.toLocaleTimeString()}</p>
//   </div>
// );
// }

// export default Timefun;




// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <City />
//         <Cityfun /> 
//         <Country /> 
//         <Countryfun />  */}
//         {/* <Time /> */}
//         {/* <Timefun /> */}
//       </div>
//     );
//   }
// }

