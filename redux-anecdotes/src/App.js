import React from 'react';

import Notification from './components/Notification'
import FilterForm from './components/FilterForm'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
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

export default App