const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case 'ALERT':
            return action.data.content

        default:
            return state
    }
}

export const createMessage = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'ALERT',
            data: {
                content: message
            }
        })

        setTimeout(() => {
            dispatch({
                type: 'ALERT',
                data: {
                    content: ''
                }
            })
        }, time)
    }
}

export default notificationReducer