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
  itemCountSpan.innerHTML++;
  uncheckedCountSpan.innerHTML++;
  let listItem = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onchange", "checkTodo(this)");
  checkbox.setAttribute("class", classNames.TODO_CHECKBOX);

  let todoTextInput = document.createElement("input");
  todoTextInput.setAttribute("class", classNames.TODO_TEXT);

  let deleteBtn = document.createElement("BUTTON");
  deleteBtn.setAttribute("class", classNames.TODO_DELETE);
  
  var todoListener = document.querySelector('ul')

  todoListener.addEventListener('click', function (event) {
    var deleteBtnClickedOn = event.target
    if (deleteBtnClickedOn.className === 'todo-delete') {
      deleteTodo(parseInt(deleteBtnClickedOn.parentNode.id))
    }

  });

  for (i = 0; i < itemCountSpan.innerHTML; i++) {
    listItem.id = i
  }
  listItem.appendChild(checkbox)
  listItem.appendChild(todoTextInput)
  listItem.appendChild(this.createDeleteBtn(deleteBtn))
  list.appendChild(listItem);
  listItem.setAttribute("class", classNames.TODO_ITEM);

}

function createDeleteBtn(deleteBtn) {

  deleteBtn.innerHTML = "Delete";
  return deleteBtn;
}

function checkTodo(checkbox) {
  return (checkbox.checked ? uncheckedCountSpan.innerHTML-- : uncheckedCountSpan.innerHTML++);
}

function deleteTodo(position) {

  // document.getElementById('deleteBtnCounter()').onclick = function () {
    console.log('itemCountSpan.innerHTML is:' + itemCountSpan.innerHTML)
    return itemCountSpan.innerHTML--;
  // }
}

// function deleteBtnCounter() {
//   return (deleteBtn.onclick ? uncheckedCountSpan.innerHTML-- : uncheckedCountSpan.innerHTML)
// }