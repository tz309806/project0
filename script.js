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
  let todoTextInput = document.createElement("input");
  let deleteBtn = document.createElement("button");


  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onchange", "checkTodo(this)");
  checkbox.setAttribute("class", classNames.TODO_CHECKBOX);
  
  todoTextInput.setAttribute("class", classNames.TODO_TEXT);
  
  deleteBtn.setAttribute("class", classNames.TODO_DELETE);
  deleteBtn.appendChild(document.createTextNode("Delete"))
  
  listItem.appendChild(checkbox)
  listItem.appendChild(todoTextInput)
  listItem.appendChild(deleteBtn)
  listItem.setAttribute("class", classNames.TODO_ITEM);
  list.appendChild(listItem);

  var deleteBtns = document.getElementsByClassName("todo-delete")

  for(var i = 0; i<deleteBtns.length; i++){
    deleteBtns[i].addEventListener('click', function(event) {

      this.parentNode.parentNode.removeChild(this.parentNode);
    
      if(!event.target.previousSibling.previousSibling.checked){
        uncheckedCountSpan.innerHTML--
      }

        console.log('itemCountSpan.innerHTML is:' + itemCountSpan.innerHTML)
        itemCountSpan.innerHTML--;
    });
  }
}

function checkTodo(checkbox) {
  return (checkbox.checked ? uncheckedCountSpan.innerHTML-- : uncheckedCountSpan.innerHTML++);
}

