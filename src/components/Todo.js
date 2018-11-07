import React, {Component} from 'react';

class Todo extends Component {
  constructor() {
    super();
    this.deleteClickedTodo = this.deleteClickedTodo.bind(this);
    this.editClickedTodo = this.editClickedTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  deleteClickedTodo() {
    this.props.onDeleteTodo(this.props.todo);
  }
  editClickedTodo() {
    this.props.onEditTodo(this.props.todo)
}
onChange(event) {
  this.setState({
    todo: event.target.value
  })
}
onSubmit(event){
  event.preventDefault()
  var todo = this.state.todo
  this.props.onUpdateTodo(todo)
  this.setState({
    todo: ""
  })
}

  render(){
    return(
      <span data-todos-index={this.props.todo.id}>
      <span onClick={ this.props.editClickedTodo }>
        {this.props.todo.body}
      </span>
      { this.props.editingTodoId === this.props.todo._id ? `<TodoForm
    autoFocus={true}
   buttonName="Update Todo!"
    onUpdateTodo={this.props.onUpdateTodo} />
  ` : '' }
      <span
        className='deleteButton'
        onClick={ this.deleteClickedTodo }>
          (X)
      </span>
    </span>
    );
  }
}

export default Todo;


