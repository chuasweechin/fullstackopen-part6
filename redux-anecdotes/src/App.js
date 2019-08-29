import React from 'react';
import { voteFor } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = (props) => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteForm store={ props.store }/>
            <br/>
            <AnecdoteList store={ props.store }/>
        </div>
    )
}

export default App