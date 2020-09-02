import React from 'react'
import useClock from './useClock'

const Clock = () => {
    const date = useClock();
    return (
        <p>{date.toLocaleTimeString()}</p>
    )
}

// class Clock extends Component {

//     state = {
//         date: new Date()
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
    
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
    
//     tick() {
//         this.setState({ date: new Date() });
//     }

//     render() {
//         return (
//             <p>{this.state.date.toLocaleTimeString()}</p>
//         )
//     }
// }

export default Clock
