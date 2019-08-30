import React from 'react'
import { filterChange } from '../reducers/filterReducer'

const FilterForm = (props) => {
    const style = {
        marginBottom: 10
    }

    const handleChange = (event) => {
        const content = event.target.value
        props.store.dispatch(filterChange(content))
    }

    return (
      <div style={ style }>
        Filter:
        <input
            name="filter"
            onChange={ handleChange } />
      </div>
    )
}

export default FilterForm