import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'

const Login = (props) => {

    const [username, setUsername] = useState('')

    const handleOnChange = (e) => {
        setUsername(e.target.value) 
    }

    return (
        <>
        
            <h1>Login</h1>
            <input onChange={handleOnChange} type="text" />
            <button onClick={() => props.onUserNameSaved(username)}>Log In</button>

        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserNameSaved: (newUserName) => dispatch({type: 'USER_NAME_SAVED', username: newUserName})
    }
}

export default connect(null, mapDispatchToProps)(Login)