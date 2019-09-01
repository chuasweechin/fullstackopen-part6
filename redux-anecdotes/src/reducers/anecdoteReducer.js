const anecdoteReducer = (state = [], action) => {
    switch(action.type) {
        case 'VOTE':
            const id = action.data.id
            const anecdoteToChange = state.find(o => o.id === id)

            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1
            }

            return state.map(o => o.id === id ? changedAnecdote : o)

        case 'INIT_ANACODOTE':
            return action.data

        case 'NEW_ANACODOTE':
            return state.concat(action.data)

        default:
            return state
    }
}

export const initializeAnecdotes = (objects) => {
    return {
        type: 'INIT_ANACODOTE',
        data: objects
    }
}

export const createAnecdote = (object) => {
    return {
        type: 'NEW_ANACODOTE',
        data: object
    }
}

export const voteFor = (id) => {
    return {
        type: 'VOTE',
        data: { id }
    }
}

export default anecdoteReducer