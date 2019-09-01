import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

import anecdoteService from '../services/anecdote'


const AnecdoteForm =  (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        props.createAnecdote(content)
        props.setNotification(`You have created a new anecdote, "${ content }"`, 3000)
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
        },
        setNotification: (value, time) => {
            return dispatch(setNotification(value, time))
        }
    }
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm