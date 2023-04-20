const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (!input.value.trim()) {
        input.value = ''
        return false
    }else{
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const divButtons = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class','text')
        divButtons.setAttribute('class','buttons_div')
        deleteButton.setAttribute('class','delete_button')
        editButton.setAttribute('class','edit_button')
        deleteButton.onclick = () => div.remove()
        editButton.onclick = () =>{
            let editText = prompt(`Edit: ${text.innerText}`).trim()
            if (editText===''){
                text.innerText
            }else {
                text.innerText = editText
            }
        }
        text.innerText = input.value.trim()
        deleteButton.innerText = 'delete'
        editButton.innerText = 'edit'
        divButtons.append(deleteButton,editButton)
        div.append(text,divButtons)
        todoList.append(div)

        input.value = ''
    }
    return input.value = ''

}
createButton.addEventListener("click",() => {
    createTodo()
})
window.addEventListener('keydown',(event) => {
    if (event.code === 'Enter') createTodo()
})



