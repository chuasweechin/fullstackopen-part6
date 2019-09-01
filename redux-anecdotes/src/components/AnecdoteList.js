import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { createMessage } from '../reducers/notificationReducer'

import Anecdote from './Anecdote'

const AnecdoteList = (props) => {
    const vote = (id, content) => () => {
        props.voteFor(id)
        props.createMessage(`You voted for anecdote, "${ content }"`)

        setTimeout(() => {
            props.createMessage('')
        }, 5000)
    }

    return (
        <div>
        {
            props.visibleAnecdotes.map(anecdote =>
                <Anecdote
                    key={ anecdote.id }
                    anecdote={ anecdote }
                    onClickHandler={ vote(anecdote.id, anecdote.content) }
                />
            )
        }
        </div>
    )
}

const anecdoteToShow = ({ anecdotes, filter }) => {
    return anecdotes
            .filter(anecdote => {
                return anecdote.content.match(filter)
            })
            .sort((a, b) => {
                return b.votes - a.votes
            })
}

const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: anecdoteToShow(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        voteFor: (value) => {
            return dispatch(voteFor(value))
        },
        createMessage: (value) => {
            return dispatch(createMessage(value))
        }
    }
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList