import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

import Anecdote from './Anecdote'

const AnecdoteList = (props) => {
    const vote = (id) => () => {
        const anecdoteToChange = props.visibleAnecdotes.find(o => o.id === id)
        props.voteFor(id, anecdoteToChange)

        props.setNotification(`You voted for anecdote, "${ anecdoteToChange.content }"`, 3000)
    }

    return (
        <div>
        {
            props.visibleAnecdotes.map(anecdote =>
                <Anecdote
                    key={ anecdote.id }
                    anecdote={ anecdote }
                    onClickHandler={ vote(anecdote.id) }
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
        voteFor: (id, selectedObject) => {
            return dispatch(voteFor(id, selectedObject))
        },
        setNotification: (value, time) => {
            return dispatch(setNotification(value, time))
        }
    }
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList