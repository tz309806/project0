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

  console.log("when clicked counter is: " + itemCountSpan.innerHTML)
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
  deleteBtn.setAttribute("onclick", "deleBtnCounter()")
  deleteBtn.appendChild(document.createTextNode("Delete"))
  var todoListener = document.querySelector('ul.todo-list')


  //   todoListener.addEventListener('click', function (event) {

  //     console.log(event)
  //     var deleteBtnClickedOn = event.target.id
  //     if (deleteBtnClickedOn.className === 'todo-delete') {
  //       deleteTodo(parseInt(deleteBtnClickedOn.parentNode.id))
  //     }

  //   });



    // listItem.setAttribute("id", i)
  
  
  listItem.appendChild(checkbox)
  listItem.appendChild(todoTextInput)
  listItem.appendChild(deleteBtn)
  listItem.setAttribute("class", classNames.TODO_ITEM);
  // deleteBtn.addEventListener("click", deleteTodo());
  list.appendChild(listItem);
}

function deleBtnCounter(){
  var deleteBtns = document.getElementsByClassName("todo-delete")
  for(var i = 0; i<deleteBtns.length; i++){
    deleteBtns[i].addEventListener('click', deleteTodo);
  }
}

function checkTodo(checkbox) {
  return (checkbox.checked ? uncheckedCountSpan.innerHTML-- : uncheckedCountSpan.innerHTML++);
}

function deleteTodo() {

  this.parentNode.parentNode.removeChild(this.parentNode);
    console.log('itemCountSpan.innerHTML is:' + itemCountSpan.innerHTML)
    return itemCountSpan.innerHTML--;

}
