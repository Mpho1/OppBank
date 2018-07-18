import React from 'react'
import CareerList from './CareerList'
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
    if (renderTodos.length > 0) {
      for (let i = 0; i < renderTodos.length; i++) {
        items.push(renderTodos[i].props.children.node)
      };
    }

    const showItems = (
      <div>
        {items.map((item, index) =>
          <CareerList
            key={index}
            node={item}
            hideUnhideApplyForm={this.props.hideUnhideApplyForm}
            hide={this.props.hideUnhideApplyForm}
            link={`/careers/${item.slug}`}/>
        )}
      </div>
    )

    return (
      <div>
        <ul>
          {showItems}
        </ul>
        <ul className={style.pageNumbers}>
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}

export default Pagination
