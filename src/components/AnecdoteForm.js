import React from 'react'
import createAnecdote from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'
import reducer from '../reducers/anecdoteReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('',this.context.store)
    
    this.context.store.dispatch(
      reducer.dispatch(event.target.anecdote.value)
    )
    

    event.target.anecdote.value = ''
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteForm
