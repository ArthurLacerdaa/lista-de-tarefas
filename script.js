
document.addEventListener('DOMContentLoaded', function() {
   
    const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

   
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim(); 

        if (taskText) { 
            const listItem = document.createElement('li');
            listItem.textContent = taskText; 

            
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Concluído';
            completeButton.classList.add('completeButton'); 
            completeButton.addEventListener('click', function() {
                listItem.classList.toggle('completed'); 
            });

            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.classList.add('deleteButton'); 
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(listItem); 
            });

            
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            taskInput.value = ''; 
        } else {
            alert('Por favor, insira uma tarefa.'); 
        }
    });
});

