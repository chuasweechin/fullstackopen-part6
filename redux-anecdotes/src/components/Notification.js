import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }

    return (
        props.message ?
        <div style={ style }>
            { props.message }
        </div> : null
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

const ConnectedNotification = connect(mapStateToProps, null)(Notification)

export default ConnectedNotification