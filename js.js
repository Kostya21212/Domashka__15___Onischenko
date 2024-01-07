document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('buttonInput');
    const textInput = document.getElementById('textInput');
    const list = document.getElementById('list');

    addButton.addEventListener('click', function () {
        const text = textInput.value.trim();
        addButton.style.backgroundColor = 'green'
        if (text !== '') {
            addListItem(text);
            textInput.value = '';
        }
    });

    list.addEventListener('click', function (event) {
        if (event.target.classList.contains('deleteButton')) {
            event.target.closest('li').remove();
        }
    });

    function addListItem(text) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span>${text}</span>
        <button class="deleteButton">X</button>`;
        list.appendChild(listItem);
    }
});
