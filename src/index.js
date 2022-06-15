document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById('create-task-form');
  const dataInput = document.getElementById('new-task-description')
  const tasksUl = document.getElementById('tasks')

    taskForm.addEventListener('submit', (e) => {
      e.preventDefault()
      workApp()
    })

    const newTask = () => {
      tasksUl.innerHTML = `<li>${dataInput.value}</li>`
    }

    const workApp = () => {
      if(tasksUl.innerHTML) {
        newTask()
      } else {
          console.log('fail')
      }
      
    }    
});
