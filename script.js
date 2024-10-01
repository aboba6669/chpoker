document.addEventListener('DOMContentLoaded', function () {
    const i1task = document.getElementById('i1');
    const b1task = document.getElementById('b1');
    const ul1task = document.getElementById('ul1');
    const b2task = document.getElementById('b2');

    b1task.addEventListener('click', function () {
        const taskText = i1task.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const checkBtn = document.createElement('button');
        checkBtn.innerHTML = '✓';
        checkBtn.classList.add('check-btn');

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '×';
        deleteBtn.classList.add('delete-btn');

        li.appendChild(taskSpan);
        li.appendChild(checkBtn);
        li.appendChild(deleteBtn);
        ul1task.appendChild(li);

        i1task.value = '';

        checkBtn.addEventListener('click', function () {
            taskSpan.classList.toggle('completed');
        });

        // Функциональность удаления задачи
        deleteBtn.addEventListener('click', function () {
            li.remove();
        });
    });

    // Очистка всех задач
    b2task.addEventListener('click', function () {
        ul1task.innerHTML = '';
    });
});