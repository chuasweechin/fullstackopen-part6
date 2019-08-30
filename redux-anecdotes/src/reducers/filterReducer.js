const filterReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_FILTER':
            return action.data.content
        default:
            return state
    }
}

export const filterChange = (filter) => {
    return {
        type: 'UPDATE_FILTER',
        data: {
            content: filter
        }
    }
}

export default filterReducer