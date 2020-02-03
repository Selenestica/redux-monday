import React from 'react'
import {connect} from 'react-redux'

function Counter(props) {
    return (<>
    
        <h1>Counter</h1>
        <h3>{props.ctr} - {props.username}</h3>
        <button onClick={props.onIncrement}>Add</button>
        <button onClick={props.onDecrease}>Subtract</button>
    
    </>)
}

// used for grabbing a state
const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        username: state.username
    }
}

//dispatch used for updating state
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT_COUNTER'}),
        onDecrease: () => dispatch({type: 'DECREASE_COUNTER'})
    }
}

//if you just want to update the value, but not display it, simply set mapStateToProps to null below

//connecting function to components. used for grabbing a state
export default connect(mapStateToProps, mapDispatchToProps)(Counter)