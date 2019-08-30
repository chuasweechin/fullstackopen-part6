import React from 'react';
import { voteFor } from './reducers/anecdoteReducer'

import Notification from './components/Notification'
import FilterForm from './components/FilterForm'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = (props) => {
    return (
        <div>
            <Notification store={ props.store }/>
            <h2>Anecdotes</h2>
            <FilterForm store={ props.store }/>
            <AnecdoteForm store={ props.store }/>
            <br/>
            <AnecdoteList store={ props.store }/>
        </div>
    )
}

export default App