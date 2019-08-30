const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case 'ALERT':
            return action.data.content

        default:
            return state
    }
}

export const createMessage = (message) => {
    return {
        type: 'ALERT',
        data: {
            content: message
        }
    }
}

export default notificationReducer