import React from 'react'

const Notification = (props) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }

    return (
        props.store.getState().message ?
        <div style={ style }>
            { props.store.getState().message }
        </div> : null
    )
}

export default Notification