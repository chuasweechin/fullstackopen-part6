import React from 'react'

const Anecdote = ({ anecdote, onClickHandler }) => {
    return (
        <div>
            <div>
                { anecdote.content }
            </div>
            <div>
                has { anecdote.votes }
                <button onClick={ onClickHandler }>vote</button>
            </div>
        </div>
    )
}

export default Anecdote