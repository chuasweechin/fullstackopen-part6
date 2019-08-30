import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value

        props.createAnecdote(content)
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

const mapDispatchToProps = (dispatch) => {
    return {
        createAnecdote: (value) => {
            return dispatch(createAnecdote(value))
        }
    }
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm