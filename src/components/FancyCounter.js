import React from 'react'
import {connect} from 'react-redux'

function FancyCounter(props) {
    return (<>
    
        <h1>FancyCounter</h1>
        <h3>{props.cat}</h3>
    
    </>)
}

const mapStateToProps = (state) => {
    return {
        cat: state.counter
    }
}

export default connect(mapStateToProps)(FancyCounter)