import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Notification from './components/Notification'
import FilterForm from './components/FilterForm'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

import { initializeAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdote'

const App = (props) => {
    useEffect(() => {
        anecdoteService.getAll()
          .then(anecdote => props.initializeAnecdotes(anecdote))
    },[])

    return (
        <div>
            <Notification/>
            <h1>Programming Anecdotes</h1>
            <FilterForm/>
            <AnecdoteForm/>
            <AnecdoteList/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        initializeAnecdotes: (value) => {
            return dispatch(initializeAnecdotes(value))
        }
    }
}

const connectedApp = connect(null, mapDispatchToProps)(App)
export default connectedApp