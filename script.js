var allTodos = []
var newIndex = 0
function submitTodo(){
    if(todo.value === ''){
        alert('stop it')
    }else{
        allTodos.push(todo.value)
        console.log(allTodos);
        showTodos()
        document.getElementById('todo').value=''


    }
}
function showTodos(){
    show.innerHTML = ''
    var html = `<cards class='cards row gap-1 p-3'>`
    allTodos.map((task, index)=>{
        html+= `<div class='each border border-2 shadow  border-white ms-5 mb-3 col-3'>
        <h3 class='mx-auto mb-5 border rounded-pill p-2 pt-1 w-25'> ${index+1}</h3>
        <h3 class='mx-auto mb-5  border rounded p-3'>${task}</h3>
        <div class=' border-top mt-5'>
        <button class='btn btn-sm my-3 me-3 mx-auto btn-warning border shadow px-3 fs-4' data-bs-toggle="modal" data-bs-target="#exampleModal1" onclick="edit(${index})"">Edit</button>
        <button class='btn btn-sm my-3  mx-auto btn-danger border shadow px-3 fs-4' onclick='deleteTodo(${index})'>Delete</button>
        </div>
        </div>`
    })
    html += `</cards>`
    document.getElementById('show').innerHTML=html;
}
function deleteTodo(i){
    var confirmation=confirm('Are you sure you want to delete?')
    if (confirmation)
    allTodos.splice(i,1)
    showTodos()

}
function edit(i){
    newIndex = i
}

function editAnyItem(){
    if(newTodo.value==""){
        alert('stop jhur')
    }else{
        var newValues = document.getElementById('newTodo').value
        allTodos.splice(newIndex , 1 , newValues);
        console.log('yes');
        showTodos()
        document.getElementById('newTodo').value = ''
    }
}
