import { observable, action, computed } from "mobx";

interface ITodoitem {
  id: number,
  name: string,
}

class TodoList {
   // 利用
  @observable public todos: ITodoitem[] = []
  @action public push() {
    this.todos.push({
        id: this.todos.length+1,
        name: 'new Task'
    })
  }
  @computed get allIdCount() {
    return this.todos.reduce((init, item) => {
        return init+item.id
    }, 0)
}
}
​
export default new TodoList()