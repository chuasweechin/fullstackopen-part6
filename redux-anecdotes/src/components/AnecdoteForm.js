import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value

        props.store.dispatch(createAnecdote(content))

        event.target.anecdote.value = ''
    }

    return (
        <div>
            <h2>Create new</h2>
            <form onSubmit={ addAnecdote }>
                <div><input name='anecdote'/></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm