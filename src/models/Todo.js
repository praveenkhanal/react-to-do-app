import axios from 'axios';

class TodoModel {
    static all(){
        
        let request = axios.get("https://super-crud-api.herokuapp.com/api/todos",)
        return request
    }
    static create(todo) {
      let request = axios.post("https://super-crud-api.herokuapp.com/api/todos", todo)
      return request
    }
  }
  
  export default TodoModel;
  