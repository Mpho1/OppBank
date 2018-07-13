import React from 'react'
import style from './Pagination.module.scss'

class Pagination extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      currentPage: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    console.log(event.currentTarget.dataset.id, 'yyyy')
    this.setState({
      currentPage: event.currentTarget.dataset.id
    })
  }

  render () {
    let todoss = this.props.todos
    this.state.todos = todoss
    let todosPerPage = this.props.todosPerPage
    const currentPage = this.state

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage.currentPage * todosPerPage
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage
    const currentTodos = this.state.todos.slice(indexOfFirstTodo, indexOfLastTodo)

    let renderTodos = []

    renderTodos = currentTodos.map((todo, index) => {
      return (<li key={index}>{todo}</li>)
    })
    console.log(renderTodos[0].props.children.node, '33p0')

    // Logic for displaying page numbers
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(this.state.todos.length / todosPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          data-id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      )
    })

    const items = []
    for (let i = 0; i < 2; i++) {
      items.push(renderTodos[i].props.children.node)
    };
    console.log(items, '99')

    return (
      <div>
        {items.forEach((items, index) => {
          return (
            <div>
              key={index}
              {items}
            </div>
          )
        })}
        <ul className={style.pageNumbers}>
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}

export default Pagination
