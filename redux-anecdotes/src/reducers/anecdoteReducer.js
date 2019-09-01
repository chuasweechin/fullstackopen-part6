import anecdoteService from '../services/anecdote'

const anecdoteReducer = (state = [], action) => {
    switch(action.type) {
        case 'VOTE':
            const id = action.data.id
            const object = action.data.updatedObject

            return state.map(o => o.id === id ? object : o)

        case 'INIT_ANACODOTE':
            return action.data.objects

        case 'NEW_ANACODOTE':
            return state.concat(action.data.newObject)

        default:
            return state
    }
}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()

        dispatch({
            type: 'INIT_ANACODOTE',
            data: {
                objects: anecdotes
            }

        })
    }
}

export const createAnecdote = (content) => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)

        dispatch({
          type: 'NEW_ANACODOTE',
          data: {
            newObject: newAnecdote
          }
        })
    }
}

export const voteFor = (id, selectedObject) => {
    return async dispatch => {
        const updatedAnecdote = await anecdoteService.update(id, {
            ...selectedObject,
            votes: selectedObject.votes + 1
        })

        dispatch({
            type: 'VOTE',
            data: {
                id: id,
                updatedObject: updatedAnecdote
            }
        })
    }
}

export default anecdoteReducer