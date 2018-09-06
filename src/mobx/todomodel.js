

import {observable, computed, action, useStrict} from 'mobx';

useStrict(true);

class TodoModel {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo=>!todo.finished).length;
    };
    
    @action
    finished(id) {
        this.todos.forEach((todo)=>{
            if (todo.id == id) {
                todo.finished = !todo.finished;
            }
        })
    }

    @action
    add(todo) {
        this.todos.push(todo);
    }
}

export let todolist = new TodoModel();