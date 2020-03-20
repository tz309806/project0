const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  
  var li = document.createElement('li');
  let todoItem = prompt("Enter your todo item")
  li.textContent = todoItem

  list.appendChild(li)
  console.log('count is ' + list.childElementCount)

}