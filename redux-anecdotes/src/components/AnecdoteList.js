import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'
import { createMessage } from '../reducers/notificationReducer'

import Anecdote from './Anecdote'

const AnecdoteList = (props) => {
    const { anecdotes, filter } = props.store.getState()

    const vote = (id, content) => () => {
        props.store.dispatch(voteFor(id))
        props.store.dispatch(createMessage(`You voted for anecdote, "${ content }"`))

        setTimeout(() => {
            props.store.dispatch(createMessage(''))
        }, 5000)
    }

    const elements = anecdotes
        .filter(anecdote => {
            return anecdote.content.match(filter)
        })
        .sort((a, b) => {
            return b.votes - a.votes
        })
        .map(anecdote => {
            return (
                <Anecdote
                    key={ anecdote.id }
                    anecdote={ anecdote }
                    onClickHandler={ vote(anecdote.id, anecdote.content) }
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