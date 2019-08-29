import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'

import Anecdote from './Anecdote'

const AnecdoteList = (props) => {
    const anecdotes = props.store.getState()

    const vote = (id) => () => {
        props.store.dispatch(voteFor(id))
    }

    const elements = anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => {
            return (
                <Anecdote
                    anecdote={ anecdote }
                    onClickHandler={ vote(anecdote.id) }
                />
            )
        })

    return (
        <div>
            { elements }
        </div>
    )
}

export default AnecdoteList