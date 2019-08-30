import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const FilterForm = (props) => {
    const style = {
        marginBottom: 10
    }

    const handleChange = (event) => {
        const content = event.target.value
        props.filterChange(content)
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

const mapDispatchToProps = (dispatch) => {
    return {
        filterChange: (value) => {
            return dispatch(filterChange(value))
        }
    }
}

const ConnectedFilterForm = connect(null, mapDispatchToProps)(FilterForm)
export default ConnectedFilterForm