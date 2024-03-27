var allTodos = []
var newIndex = 0

function submitTodo() {

    if (todo.value === '' || todoDes.value === '') {
        alert('stop it')
    } else {
        var todoContain = {
            inputOne: document.getElementById('todo').value,
            inputTwo: document.getElementById('todoDes').value,
            inputFour: new Date().toLocaleTimeString(),
            inputThree: new Date().toLocaleDateString(),
        }
        allTodos.push(todoContain)
        localStorage.setItem('todos', JSON.stringify(allTodos))
        document.getElementById('todo').value = ''
        document.getElementById('todoDes').value = ''
        window.location.href = "new.html"
        
    }
}
if (localStorage.todos) {
    allTodos = JSON.parse(localStorage.getItem('todos'));}
// localStorage.setItem('coders', JSON.stringify(allTodos))
//     var allTodos = []
//     var newIndex = 0
//     var newShow=todoContain
//     var todoContain = JSON.parse(localStorage.getItem('showMe'))
