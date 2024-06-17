document.getElementById('add-button').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    const priority = document.getElementById('priority').value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = `${taskText} (${priority} priority)`;

    const completeButton = document.createElement('button');
    completeButton.className = 'complete-button';
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        taskItem.remove();
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(completeButton);

    document.getElementById('task-list').appendChild(taskItem);

    document.getElementById('new-task').value = '';
    document.getElementById('priority').value = 'low';
});
