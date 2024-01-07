const button = document.querySelector('.input-container button');
const input = document.querySelector('.input-container input');
const list = document.querySelector('.todo-list');

button.addEventListener('click', () => {
    const inputValue =input.value.trim()
    if(inputValue !== ''){
    const li = document.createElement('li');
    li.className = 'todo-list-item';
    li.innerText = input.value
    const deleteButton = document.createElement('button'); 
    deleteButton.innerText = 'delete'
    list.appendChild(li)
    li.appendChild(deleteButton)
    input.value = ''
    deleteButton.addEventListener('click', () => {
        if(confirm('Ви впевнені що хочете видалити цей елемент? ')){
        list.removeChild(li)}
    })
}else{
    alert('Введіть будь ласка щось!')
}
}
)
